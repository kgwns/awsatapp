import {fireEvent, render, RenderAPI} from '@testing-library/react-native';
import React from 'react';
import Share from 'react-native-share';
import {ButtonImage} from 'src/components/atoms/button-image/ButtonImage';
import { OpinionArticleDetailItemType } from 'src/redux/opinionArticleDetail/types';
import {OpinionArticleDetailFooter} from '../OpinionArticleDetailFooter';

const DeviceTypeUtilsMock = jest.requireMock('src/shared/utils/dimensions');
jest.mock('src/shared/utils/dimensions', () => ({
  ...jest.requireActual('src/shared/utils/dimensions'),
  isIOS: false
}));

describe('<OpinionArticleDetailFooter>', () => {
  let instance: RenderAPI;
  const mockFunction = jest.fn();
  const data: OpinionArticleDetailItemType = {
    title: 'باريس المتفائلة... الخرطوم المتشائمة!',
    bundle: 'opinion',
    body_export: '<span class="app-body"><p>على مدى يومين هذا الأسبوع احتفت باريس بالسودان وثورته، من خلال المؤتمر الاقتصادي لدعم الانتقال الديمقراطي الذي خصص على مدى يوم كامل لبحث فرص الاستثمار ومسألة تسوية الديون، ثم من خلال فعالية عن الثورة السودانية لحشد الدعم السياسي على هامش القمة الفرنسية - الأفريقية لبحث تمويل اقتصادات دول القارة المتضررة من تداعيات جائحة «كورونا».<br />مقابل أجواء التفاؤل في باريس، والترحيب من عدة جهات سودانية بالنتائج، كان هناك البعض في الخرطوم يثير أجواء تشاؤمية مقللاً من أهمية ما تحقق، بل واعتباره فشلاً ذريعاً. فالسودان اليوم متنازع بين قوى عدة تشد في اتجاهات متباينة، من أنصار النظام السابق، إلى المراهنين على عودة العسكر، مروراً بأولئك الذين يضعون قدماً في السلطة ويلعبون في الوقت ذاته ورقة المعارضة. هذا لا يعني بالطبع أن هناك من ينتقد النتائج لأنه كان يأمل في نتائج أكثر مما رآه يتحقق، أو أنه يتخوف من تبخر الوعود مثلما حدث في مؤتمرات سابقة.<br />في تقديري أن السودان خرج بمواقف مهمة على صعيد الدعم السياسي، وفيما يتعلق بجهود تسوية ديونه المتراكمة، وهي النقطة الأهم. فالحقيقة التي لا جدال عليها أن الديون التي تراكمت في عهد النظام السابق وارتفعت من نحو 12 مليار دولار إلى 60 ملياراً نتيجة سياسة التوقف عن سداد المستحقات المترتبة عنها، كانت تشكل عقبة كبرى أمام استفادة السودان من الاستثمارات، وتمويل مشروعات مهمة للتنمية، وعودة اندماجه في الاقتصاد العالمي. هذه العقبة ذاتها لم يكن سهلاً البدء في معالجتها إلا بعد أن نجحت الحكومة الانتقالية في إزالة اسم السودان من القائمة الأميركية للدول الداعمة للإرهاب. فمن دون تلك الخطوة كانت عودة إدماج السودان في الاقتصاد العالمي ستكون مستحيلة تقريباً.<br />نجحت الحكومة الانتقالية منذ ذلك الحين في معالجة مشكلة متأخرات ديون البنك الدولي وبنك التنمية الأفريقي من خلال قروض تجسيرية من الولايات المتحدة وبريطانيا والسويد وآيرلندا، لكن الآمال الكبرى كانت معلقة بما يمكن أن يتحقق في مؤتمر باريس، وهو ما عبر عنه رئيس الوزراء عبد الله حمدوك بقوله إن اختيار العاصمة الفرنسية لم يكن مصادفة باعتبارها «تستضيف نادي باريس وهو أكبر دائنينا»، مشيراً إلى الوصول إلى توافق بشأن ديون صندوق النقد الدولي وإلى إمكانية إغلاق ملف الديون قبل نهاية العام الحالي.<br />تسوية متأخرات ديون السودان لصندوق النقد الدولي ستزيل عقبة أخيرة من الطريق للحصول على تخفيف أكبر لديونه والاستفادة من برنامج إعفاء البلدان الفقيرة المثقلة بالديون (هيبك). وقد أكد الرئيس الفرنسي إيمانويل ماكرون موافقة عدد من الدول الأعضاء في صندوق النقد الدولي على تسوية متأخرات السودان للصندوق، وأن فرنسا ستساعد في هذا الجهد بقرض تجسيري بمبلغ 1.5 مليار دولار تتم تغطيته من تعهدات قدمتها عدة دول خلال مؤتمر باريس.<br />تبقى بعد ذلك مسألة الديون الثنائية التي تشكل النسبة الأعلى من ديون السودان، إضافة إلى نحو ستة مليارات دولار من الديون التجارية. وقد أعلنت عدة دول خلال مؤتمر باريس التزامها بتسوية ديونها بالإعفاء الكامل أو الجزئي، وهو ما سيتضح خلال الأسابيع القليلة المقبلة بعد أن تتوفر الأرقام بصورة رسمية وتتضح الالتزامات.<br />مؤتمر باريس بمقياس النتائج كان أنجح من مؤتمر برلين الذي انعقد في يونيو (حزيران) العام الماضي برعاية ألمانيا والاتحاد الأوروبي والأمم المتحدة. فذلك المؤتمر ربما ظلمته أيضاً التوقعات الكبيرة التي سبقته في أن يحقق للسودان تغطية كل أو جزء كبير من الثمانية مليارات دولار التي قال رئيس الوزراء عبد الله حمدوك إن البلد يحتاج إليها من المساعدات الخارجية لكي يتمكن من مواجهة احتياجاته وسد الهوة الكبيرة في ميزان مدفوعاته وللمساعدة في إعادة بناء اقتصاده المنهار. من ذلك المبلغ لم يحقق مؤتمر برلين سوى تعهدات بمبلغ مليار و800 مليون دولار لم يتسلم منها في الواقع إلا نحو 370 مليوناً.<br />خلال مؤتمر باريس أعلن عن مؤتمرين آخرين لدعم الاقتصاد والتحول الديمقراطي في السودان؛ الأول في مارس (آذار) من العام المقبل في الولايات المتحدة، والثاني في اليابان في أكتوبر (تشرين الأول) 2022. هذان المؤتمران فرصة للسودان لكي يثبت أنه يسير على الطريق الصحيح ونحو التعافي الاقتصادي والسياسي، ولكي يقنع المجتمع الدولي بأهليته للحصول على المزيد من الدعم. فالدول في علاقاتها ومصالحها لا تدير جمعية خيرية، والسودان ليس البلد الوحيد الذي ينتظر مساعدات، لذا فإن الضغط عليه باعتباره الطرف المحتاج للدعم لكي يثبت أنه يسير في طريق الإصلاح والبناء، ولكي يقنع المستثمرين بجدوى وضع أموالهم فيه. صحيح هناك رغبة من المجتمع الدولي لمساعدة السودان لكنها رغبة مشروطة بأن تكون هناك خطوات حقيقية نحو الإصلاح الاقتصادي، ونحو السلام، ونحو الانتخابات والديمقراطية.<br />من السذاجة أن يعتقد البعض أن الدول ستساعد السودان بلا مقابل، أو أن البلد سوف يستطيع الخروج من الحفرة التي تردى إليها من دون دعم اقتصادي ومن دون اجتذاب رؤوس الأموال والاستثمارات الخارجية. هذا لا يعني بأي حال من الأحوال إهمال تنمية الموارد الذاتية، فهي طريق الخلاص الحقيقي لبلد غني بموارده أقعدته أمراض السياسة وصراعات السلطة، والحروب الداخلية.<br />ما هو المطلوب من السودان؟<br />لكي يستفيد البلد من أي فرص استثمارية ولكي يحقق تنمية داخلية يحتاج إليها بشدة لا بد من خطوات وإصلاحات عاجلة. بداية فإنه من دون إصلاح القطاع المصرفي وتحسين الخدمات والبنية التحتية لن يتحقق حلم اجتذاب الاستثمارات الأجنبية. ولأن القطاع المصرفي في السودان متهالك وإصلاحه سيستغرق وقتاً، فقد يكون مفيداً فتح الباب أمام دخول بنوك أجنبية، وهو أمر معمول به في معظم دول العالم وكان موجوداً في السودان قبل أن تحل به كوارث السياسة والتجارب الفاشلة.<br />في مجال البنية التحتية يحتاج السودان إلى اجتذاب تمويل واستثمارات عاجلة في مجالات الطاقة (الطاقة الشمسية والرياح إلى جانب الطاقة الكهربائية من السدود)، وقطاع الاتصالات والتحول الرقمي، وقطاع النقل والسكك الحديد والطيران، وفي مجال تطوير الزراعة والتعدين.<br />يحتاج السودان أيضاً إلى مفوضية قوية لمحاربة الفساد الذي استشرى ونخر في عظم البلد الهش، ومن دون اجتثاثه سوف يستمر تبديد الموارد ونهب الثروات وتعطيل المشاريع وهي بيئة طاردة للاستثمارات الأجنبية، ومعطلة للتنمية.<br />الحكومة الانتقالية تواجه أيضاً مطالبات من الداخل والخارج لاستكمال هياكل السلطة في الفترة الانتقالية بتشكيل المجلس التشريعي الذي تأخر كثيراً لأسباب غير مفهومة، ووجوده ضروري لكي تكون هناك جهة للمساءلة والمحاسبة، ولتوسيع المشاركة السياسية لا سيما أمام الشباب والمرأة والأقاليم المختلفة. يبقى بعد ذلك استكمال ملف السلام وإعادة هيكلة القوات المسلحة وإصلاح القضاء وعقد المؤتمر الدستوري، بما يهيئ الوصول إلى محطة الانتخابات الديمقراطية.<br />مؤتمر باريس هذا الأسبوع كان اختراقاً جديداً في طريق فك عزلة السودان، وخطوة أخرى مهمة لتحرير السودان من عبء الديون التي كبلته، وفي إطار الجهود لاجتذاب الاستثمارات الخارجية التي يحتاج إليها بشدة، على الرغم مما يثيره المتشائمون.</p>\n</span>',
    nid_export: '2982206',
    field_new_issueno_export: '15514',
    view_node: 'http://srpcawsatdev.prod.acquia-sites.com/home/article/2982206/%D8%B9%D8%AB%D9%85%D8%A7%D9%86-%D9%85%D9%8A%D8%B1%D8%BA%D9%86%D9%8A/%D8%A8%D8%A7%D8%B1%D9%8A%D8%B3-%D8%A7%D9%84%D9%85%D8%AA%D9%81%D8%A7%D8%A6%D9%84%D8%A9-%D8%A7%D9%84%D8%AE%D8%B1%D8%B7%D9%88%D9%85-%D8%A7%D9%84%D9%85%D8%AA%D8%B4%D8%A7%D8%A6%D9%85%D8%A9',
    field_publication_date_export: '2021-05-20T20:05:45+0000',
    created_export: '2021-05-19T20:48:09+0000',
    jwplayer: null,
    field_edit_letter_writer_export: null,
    writer: [],
    isBookmarked: false,
    isFollowed: false,
    field_shorturl: '',
    link_node: 'https://aawsat.srpcdigital.com/node/2982206'
  };

  beforeEach(() => {
    jest.useFakeTimers({
      legacyFakeTimers: true
    });
    jest.spyOn(Share,'open').mockResolvedValue({response:true} as any);
    const component = (
      <OpinionArticleDetailFooter opinionArticleDetailData={data} isBookmarked={false} onPressSave={mockFunction} onPressFontSizeChange={mockFunction}/>
    );
    instance = render(component);
  });

  afterEach(() => {
    jest.clearAllMocks();
    instance.unmount();
  });

  it('should render OpinionArticleDetailFooter component', () => {
    expect(instance).toBeDefined();
  });

  it('should render OpinionArticleDetailFooter component in iOS', () => {
    DeviceTypeUtilsMock.isIOS = true;
    expect(instance).toBeDefined();
  });

  it('Should call font increase button', () => {
    const element = instance.container.findAllByType(ButtonImage)[0];
    fireEvent(element, 'onPress');
    expect(element).toBeTruthy();
  });

  it('Should call font increase button', () => {
    const element = instance.container.findAllByType(ButtonImage)[1];
    fireEvent(element, 'onPress');
    expect(element).toBeTruthy();
  });

  it('Should call share button and return response', () => {
    const element = instance.container.findAllByType(ButtonImage)[2];
    fireEvent(element, 'onPress');
    expect(element).toBeTruthy();
  });

});


describe('<OpinionArticleDetailFooter>', () => {
  let instance: RenderAPI;
  const mockFunction = jest.fn();
  const data: OpinionArticleDetailItemType = {
    title: 'باريس المتفائلة... الخرطوم المتشائمة!',
    bundle: 'opinion',
    body_export: '<span class="app-body"><p>على مدى يومين هذا الأسبوع احتفت باريس بالسودان وثورته، من خلال المؤتمر الاقتصادي لدعم الانتقال الديمقراطي الذي خصص على مدى يوم كامل لبحث فرص الاستثمار ومسألة تسوية الديون، ثم من خلال فعالية عن الثورة السودانية لحشد الدعم السياسي على هامش القمة الفرنسية - الأفريقية لبحث تمويل اقتصادات دول القارة المتضررة من تداعيات جائحة «كورونا».<br />مقابل أجواء التفاؤل في باريس، والترحيب من عدة جهات سودانية بالنتائج، كان هناك البعض في الخرطوم يثير أجواء تشاؤمية مقللاً من أهمية ما تحقق، بل واعتباره فشلاً ذريعاً. فالسودان اليوم متنازع بين قوى عدة تشد في اتجاهات متباينة، من أنصار النظام السابق، إلى المراهنين على عودة العسكر، مروراً بأولئك الذين يضعون قدماً في السلطة ويلعبون في الوقت ذاته ورقة المعارضة. هذا لا يعني بالطبع أن هناك من ينتقد النتائج لأنه كان يأمل في نتائج أكثر مما رآه يتحقق، أو أنه يتخوف من تبخر الوعود مثلما حدث في مؤتمرات سابقة.<br />في تقديري أن السودان خرج بمواقف مهمة على صعيد الدعم السياسي، وفيما يتعلق بجهود تسوية ديونه المتراكمة، وهي النقطة الأهم. فالحقيقة التي لا جدال عليها أن الديون التي تراكمت في عهد النظام السابق وارتفعت من نحو 12 مليار دولار إلى 60 ملياراً نتيجة سياسة التوقف عن سداد المستحقات المترتبة عنها، كانت تشكل عقبة كبرى أمام استفادة السودان من الاستثمارات، وتمويل مشروعات مهمة للتنمية، وعودة اندماجه في الاقتصاد العالمي. هذه العقبة ذاتها لم يكن سهلاً البدء في معالجتها إلا بعد أن نجحت الحكومة الانتقالية في إزالة اسم السودان من القائمة الأميركية للدول الداعمة للإرهاب. فمن دون تلك الخطوة كانت عودة إدماج السودان في الاقتصاد العالمي ستكون مستحيلة تقريباً.<br />نجحت الحكومة الانتقالية منذ ذلك الحين في معالجة مشكلة متأخرات ديون البنك الدولي وبنك التنمية الأفريقي من خلال قروض تجسيرية من الولايات المتحدة وبريطانيا والسويد وآيرلندا، لكن الآمال الكبرى كانت معلقة بما يمكن أن يتحقق في مؤتمر باريس، وهو ما عبر عنه رئيس الوزراء عبد الله حمدوك بقوله إن اختيار العاصمة الفرنسية لم يكن مصادفة باعتبارها «تستضيف نادي باريس وهو أكبر دائنينا»، مشيراً إلى الوصول إلى توافق بشأن ديون صندوق النقد الدولي وإلى إمكانية إغلاق ملف الديون قبل نهاية العام الحالي.<br />تسوية متأخرات ديون السودان لصندوق النقد الدولي ستزيل عقبة أخيرة من الطريق للحصول على تخفيف أكبر لديونه والاستفادة من برنامج إعفاء البلدان الفقيرة المثقلة بالديون (هيبك). وقد أكد الرئيس الفرنسي إيمانويل ماكرون موافقة عدد من الدول الأعضاء في صندوق النقد الدولي على تسوية متأخرات السودان للصندوق، وأن فرنسا ستساعد في هذا الجهد بقرض تجسيري بمبلغ 1.5 مليار دولار تتم تغطيته من تعهدات قدمتها عدة دول خلال مؤتمر باريس.<br />تبقى بعد ذلك مسألة الديون الثنائية التي تشكل النسبة الأعلى من ديون السودان، إضافة إلى نحو ستة مليارات دولار من الديون التجارية. وقد أعلنت عدة دول خلال مؤتمر باريس التزامها بتسوية ديونها بالإعفاء الكامل أو الجزئي، وهو ما سيتضح خلال الأسابيع القليلة المقبلة بعد أن تتوفر الأرقام بصورة رسمية وتتضح الالتزامات.<br />مؤتمر باريس بمقياس النتائج كان أنجح من مؤتمر برلين الذي انعقد في يونيو (حزيران) العام الماضي برعاية ألمانيا والاتحاد الأوروبي والأمم المتحدة. فذلك المؤتمر ربما ظلمته أيضاً التوقعات الكبيرة التي سبقته في أن يحقق للسودان تغطية كل أو جزء كبير من الثمانية مليارات دولار التي قال رئيس الوزراء عبد الله حمدوك إن البلد يحتاج إليها من المساعدات الخارجية لكي يتمكن من مواجهة احتياجاته وسد الهوة الكبيرة في ميزان مدفوعاته وللمساعدة في إعادة بناء اقتصاده المنهار. من ذلك المبلغ لم يحقق مؤتمر برلين سوى تعهدات بمبلغ مليار و800 مليون دولار لم يتسلم منها في الواقع إلا نحو 370 مليوناً.<br />خلال مؤتمر باريس أعلن عن مؤتمرين آخرين لدعم الاقتصاد والتحول الديمقراطي في السودان؛ الأول في مارس (آذار) من العام المقبل في الولايات المتحدة، والثاني في اليابان في أكتوبر (تشرين الأول) 2022. هذان المؤتمران فرصة للسودان لكي يثبت أنه يسير على الطريق الصحيح ونحو التعافي الاقتصادي والسياسي، ولكي يقنع المجتمع الدولي بأهليته للحصول على المزيد من الدعم. فالدول في علاقاتها ومصالحها لا تدير جمعية خيرية، والسودان ليس البلد الوحيد الذي ينتظر مساعدات، لذا فإن الضغط عليه باعتباره الطرف المحتاج للدعم لكي يثبت أنه يسير في طريق الإصلاح والبناء، ولكي يقنع المستثمرين بجدوى وضع أموالهم فيه. صحيح هناك رغبة من المجتمع الدولي لمساعدة السودان لكنها رغبة مشروطة بأن تكون هناك خطوات حقيقية نحو الإصلاح الاقتصادي، ونحو السلام، ونحو الانتخابات والديمقراطية.<br />من السذاجة أن يعتقد البعض أن الدول ستساعد السودان بلا مقابل، أو أن البلد سوف يستطيع الخروج من الحفرة التي تردى إليها من دون دعم اقتصادي ومن دون اجتذاب رؤوس الأموال والاستثمارات الخارجية. هذا لا يعني بأي حال من الأحوال إهمال تنمية الموارد الذاتية، فهي طريق الخلاص الحقيقي لبلد غني بموارده أقعدته أمراض السياسة وصراعات السلطة، والحروب الداخلية.<br />ما هو المطلوب من السودان؟<br />لكي يستفيد البلد من أي فرص استثمارية ولكي يحقق تنمية داخلية يحتاج إليها بشدة لا بد من خطوات وإصلاحات عاجلة. بداية فإنه من دون إصلاح القطاع المصرفي وتحسين الخدمات والبنية التحتية لن يتحقق حلم اجتذاب الاستثمارات الأجنبية. ولأن القطاع المصرفي في السودان متهالك وإصلاحه سيستغرق وقتاً، فقد يكون مفيداً فتح الباب أمام دخول بنوك أجنبية، وهو أمر معمول به في معظم دول العالم وكان موجوداً في السودان قبل أن تحل به كوارث السياسة والتجارب الفاشلة.<br />في مجال البنية التحتية يحتاج السودان إلى اجتذاب تمويل واستثمارات عاجلة في مجالات الطاقة (الطاقة الشمسية والرياح إلى جانب الطاقة الكهربائية من السدود)، وقطاع الاتصالات والتحول الرقمي، وقطاع النقل والسكك الحديد والطيران، وفي مجال تطوير الزراعة والتعدين.<br />يحتاج السودان أيضاً إلى مفوضية قوية لمحاربة الفساد الذي استشرى ونخر في عظم البلد الهش، ومن دون اجتثاثه سوف يستمر تبديد الموارد ونهب الثروات وتعطيل المشاريع وهي بيئة طاردة للاستثمارات الأجنبية، ومعطلة للتنمية.<br />الحكومة الانتقالية تواجه أيضاً مطالبات من الداخل والخارج لاستكمال هياكل السلطة في الفترة الانتقالية بتشكيل المجلس التشريعي الذي تأخر كثيراً لأسباب غير مفهومة، ووجوده ضروري لكي تكون هناك جهة للمساءلة والمحاسبة، ولتوسيع المشاركة السياسية لا سيما أمام الشباب والمرأة والأقاليم المختلفة. يبقى بعد ذلك استكمال ملف السلام وإعادة هيكلة القوات المسلحة وإصلاح القضاء وعقد المؤتمر الدستوري، بما يهيئ الوصول إلى محطة الانتخابات الديمقراطية.<br />مؤتمر باريس هذا الأسبوع كان اختراقاً جديداً في طريق فك عزلة السودان، وخطوة أخرى مهمة لتحرير السودان من عبء الديون التي كبلته، وفي إطار الجهود لاجتذاب الاستثمارات الخارجية التي يحتاج إليها بشدة، على الرغم مما يثيره المتشائمون.</p>\n</span>',
    nid_export: '2982206',
    field_new_issueno_export: '15514',
    view_node: 'http://srpcawsatdev.prod.acquia-sites.com/home/article/2982206/%D8%B9%D8%AB%D9%85%D8%A7%D9%86-%D9%85%D9%8A%D8%B1%D8%BA%D9%86%D9%8A/%D8%A8%D8%A7%D8%B1%D9%8A%D8%B3-%D8%A7%D9%84%D9%85%D8%AA%D9%81%D8%A7%D8%A6%D9%84%D8%A9-%D8%A7%D9%84%D8%AE%D8%B1%D8%B7%D9%88%D9%85-%D8%A7%D9%84%D9%85%D8%AA%D8%B4%D8%A7%D8%A6%D9%85%D8%A9',
    field_publication_date_export: '2021-05-20T20:05:45+0000',
    created_export: '2021-05-19T20:48:09+0000',
    jwplayer: null,
    field_edit_letter_writer_export: null,
    writer: [],
    isBookmarked: false,
    isFollowed: false,
    field_shorturl: '',
    link_node: 'https://aawsat.srpcdigital.com/node/2982206'
  };

  beforeEach(() => {
    jest.useFakeTimers({
      legacyFakeTimers: true
    });
    jest.spyOn(Share,'open').mockRejectedValue('error');
    const component = (
      <OpinionArticleDetailFooter opinionArticleDetailData={data} isBookmarked={true} onPressSave={mockFunction} onPressFontSizeChange={mockFunction}/>
    );
    instance = render(component);
  });

  afterEach(() => {
    jest.clearAllMocks();
    instance.unmount();
  });

  it('should render OpinionArticleDetailFooter component', () => {
    expect(instance).toBeDefined();
  });

  it('Should call font increase button', () => {
    const element = instance.container.findAllByType(ButtonImage)[0];
    fireEvent(element, 'onPress');
    expect(element).toBeTruthy();
  });

  it('Should call font increase button', () => {
    const element = instance.container.findAllByType(ButtonImage)[1];
    fireEvent(element, 'onPress');
    expect(element).toBeTruthy();
  });

  it('Should call share button', () => {
    const element = instance.container.findAllByType(ButtonImage)[2];
    fireEvent(element, 'onPress');
    expect(element).toBeTruthy(); 
  });

  it('Should call share button and throws error',() => {
    const element = instance.container.findAllByType(ButtonImage)[2];
    fireEvent(element, 'onPress');
    expect(element).toBeTruthy();
  })
});
