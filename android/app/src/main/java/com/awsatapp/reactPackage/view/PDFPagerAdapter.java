/*
 * Copyright (c)
 * Copyright (C) 2017. Codeline Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Malek Hijazi<malek.hijazii@gmail.com>, 2017
 *
 */
package com.awsatapp.reactPackage.view;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.RectF;
import android.graphics.pdf.PdfRenderer;
import android.util.SparseArray;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import com.awsatapp.R;
import com.github.chrisbanes.photoview.OnMatrixChangedListener;
import com.github.chrisbanes.photoview.PhotoViewAttacher;

import java.lang.ref.WeakReference;

import es.voghdev.pdfviewpager.library.adapter.PdfScale;
import es.voghdev.pdfviewpager.library.util.EmptyClickListener;



public class PDFPagerAdapter extends BasePDFPagerAdapter
        implements OnMatrixChangedListener {

    private static final float DEFAULT_SCALE = 1f;

    SparseArray<WeakReference<PhotoViewAttacher>> attachers;
    PdfScale scale = new PdfScale();
    View.OnClickListener pageClickListener = new EmptyClickListener();

    public PDFPagerAdapter(Context context, String pdfPath) {
        super(context, pdfPath);
        attachers = new SparseArray<>();
    }

    @Override
    @SuppressWarnings("NewApi")
    public Object instantiateItem(ViewGroup container, int position) {
        View v = inflater.inflate(R.layout.view_pdf_page, container, false);
        ImageView iv = (ImageView) v.findViewById(R.id.imageView);

        if (renderer == null || getCount() < position) {
            return v;
        }

        PdfRenderer.Page page = getPDFPage(renderer, position);

        Bitmap bitmap = bitmapContainer.get(position);
        page.render(bitmap, null, null, PdfRenderer.Page.RENDER_MODE_FOR_DISPLAY);
        page.close();

        PhotoViewAttacher attacher = new PhotoViewAttacher(iv);
        attacher.setScale(scale.getScale(), scale.getCenterX(), scale.getCenterY(), true);
        attacher.setOnMatrixChangeListener(this);

        attachers.put(position, new WeakReference<PhotoViewAttacher>(attacher));

        iv.setImageBitmap(bitmap);
        attacher.setOnPhotoTapListener((view, x, y) -> pageClickListener.onClick(view));
        iv.setRotationY(180);
        attacher.update();
        container.addView(v, 0);

        return v;
    }

    @Override
    public void close() {
        super.close();
        if (attachers != null) {
            attachers.clear();
            attachers = null;
        }
    }

    @Override
    public void onMatrixChanged(RectF rect) {
        if (scale.getScale() != PdfScale.DEFAULT_SCALE) {
//            scale.setCenterX(rect.centerX());
//            scale.setCenterY(rect.centerY());
        }
    }

    public static class Builder {
        Context context;
        String pdfPath = "";
        float scale = DEFAULT_SCALE;
        float centerX = 0f, centerY = 0f;
        int offScreenSize = DEFAULT_OFFSCREENSIZE;
        float renderQuality = DEFAULT_QUALITY;
        View.OnClickListener pageClickListener = new EmptyClickListener();

        public Builder(Context context) {
            this.context = context;
        }

        public Builder setScale(float scale) {
            this.scale = scale;
            return this;
        }

        public Builder setScale(PdfScale scale) {
            this.scale = scale.getScale();
            this.centerX = scale.getCenterX();
            this.centerY = scale.getCenterY();
            return this;
        }

        public Builder setCenterX(float centerX) {
            this.centerX = centerX;
            return this;
        }

        public Builder setCenterY(float centerY) {
            this.centerY = centerY;
            return this;
        }

        public Builder setRenderQuality(float renderQuality) {
            this.renderQuality = renderQuality;
            return this;
        }

        public Builder setOffScreenSize(int offScreenSize) {
            this.offScreenSize = offScreenSize;
            return this;
        }

        public Builder setPdfPath(String path) {
            this.pdfPath = path;
            return this;
        }

        public Builder setOnPageClickListener(View.OnClickListener listener) {
            if (listener != null) {
                pageClickListener = listener;
            }
            return this;
        }

        public PDFPagerAdapter create() {
            PDFPagerAdapter adapter = new PDFPagerAdapter(context, pdfPath);
            adapter.scale.setScale(scale);
            adapter.scale.setCenterX(centerX);
            adapter.scale.setCenterY(centerY);
            adapter.offScreenSize = offScreenSize;
            adapter.renderQuality = renderQuality;
            adapter.pageClickListener = pageClickListener;
            return adapter;
        }
    }
}
