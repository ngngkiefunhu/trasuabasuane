export interface OpportunityItem {
  id: string;
  index: string;
  title: string;
  summary: string;
  analysis: string;
  indicator: string;
}

export interface FeasibilityFactor {
  id: string;
  title: string;
  assessment: 'Thuận lợi' | 'Cần lưu ý';
  detail: string;
  evidenceInModel: string;
}

export interface SwotQuadrant {
  key: 'S' | 'W' | 'O' | 'T';
  label: string;
  vietnameseTitle: string;
  tone: 'positive' | 'caution';
  points: string[];
  takeaway: string;
}

export interface CompetencyItem {
  id: string;
  index: string;
  title: string;
  concept: string;
  manifestation: string;
  example: string;
}

export interface RoadmapStep {
  id: string;
  step: string;
  title: string;
  description: string;
  deliverable: string;
  linkedCompetency: string;
}

export interface CapitalAllocation {
  id: string;
  label: string;
  amount: number;
  percentage: number;
  color: string;
  note: string;
}

export interface RiskSolutionItem {
  id: string;
  index: string;
  risk: string;
  impact: string;
  solution: string;
}

export const PROJECT_META = {
  brandName: 'BA SỮA',
  projectTitle: 'MÔ HÌNH KINH DOANH TIỆM TRÀ SỮA BA SỮA',
  slogan: 'Một ngụm ngọt ngào – Ba phần yêu thương',
  closingMessage: 'BA SỮA – Khởi đầu từ một ý tưởng, phát triển bằng sự sáng tạo.',
  author: 'Nguyễn Ngọc Kiều Như',
  className: 'Lớp 11X',
  subject: 'Giáo dục Kinh tế và Pháp luật 11',
  lesson: 'Bài 6: Ý tưởng, cơ hội kinh doanh và các năng lực cần thiết của người kinh doanh',
  logoImage: '/assets/aistudio/image_3d1a878e.png',
  heroCupImage: '/src/assets/images/hero_milk_tea_cup_1795014878418.jpg',
  ingredientsImage: '/src/assets/images/milk_tea_ingredients_1795014878887.jpg',
  trioImage: '/src/assets/images/milk_tea_trio_1795014879332.jpg',
};

export const THEORY_DISTINCTION = [
  {
    code: '01',
    term: 'Ý tưởng kinh doanh',
    definition:
      'Là những suy nghĩ, sáng kiến về sản phẩm, dịch vụ hoặc cách thức tổ chức hoạt động kinh doanh mới nhằm đáp ứng nhu cầu của người tiêu dùng.',
    inBaSua: 'Tạo ra tiệm trà sữa học đường giá hợp lý, hương vị đa dạng và gần gũi.',
  },
  {
    code: '02',
    term: 'Cơ hội kinh doanh',
    definition:
      'Là tập hợp các điều kiện, hoàn cảnh thuận lợi từ môi trường bên ngoài và nguồn lực bên trong giúp ý tưởng kinh doanh có thể triển khai thành công.',
    inBaSua: 'Thói quen giải khát sau giờ học, vị trí gần trường học và xu hướng chia sẻ trên mạng xã hội.',
  },
  {
    code: '03',
    term: 'Năng lực người kinh doanh',
    definition:
      'Là tổng hợp kiến thức, kỹ năng và phẩm chất cần thiết giúp chủ thể nắm bắt cơ hội, điều hành hoạt động và vượt qua rủi ro.',
    inBaSua: '7 năng lực cốt lõi từ pha chế, quản lý, tài chính đến giao tiếp và sáng tạo.',
  },
];

export const BUSINESS_IDEA_DETAILS = {
  whatIsIdea:
    'Theo Bài 6 Giáo dục Kinh tế và Pháp luật 11, ý tưởng kinh doanh là khái niệm mang tính sáng tạo, xuất phát từ việc nhận diện nhu cầu chưa được đáp ứng hoặc có thể phục vụ tốt hơn trên thị trường để đề xuất sản phẩm/dịch vụ phù hợp.',
  whatBaSuaOffers:
    'BA SỮA định hướng mô hình đồ uống trà sữa phục vụ nhu cầu giải khát và giao lưu của học sinh, sinh viên với 3 dòng hương vị tiêu biểu: Trà sữa truyền thống – đường đen, Trà sữa trái cây thanh mát và Trà sữa kem sữa dịu nhẹ.',
  origin:
    'Ý tưởng hình thành từ quan sát thực tế nhu cầu thưởng thức đồ uống của học sinh và giới trẻ sau giờ học, kết hợp mong muốn xây dựng một thương hiệu trà sữa có mức giá phù hợp với túi tiền học sinh, hương vị đa dạng và không gian gần gũi, thân thiện.',
  problemsAndNeeds: [
    'Nhiều thương hiệu lớn có mức giá cao so với khả năng chi tiêu hằng tuần của học sinh.',
    'Một số điểm bán nhỏ lẻ chưa chú trọng đồng đều đến độ tươi của nguyên liệu và sự thân thiện trong phục vụ.',
    'Học sinh cần một địa điểm gần gũi để thư giãn, trao đổi bài vở hoặc trò chuyện cùng bạn bè.',
  ],
  objectives: [
    'Cung cấp đồ uống sạch, vị hài hòa và mức giá dễ tiếp cận đối với học sinh, sinh viên.',
    'Xây dựng hình ảnh thương hiệu trẻ trung, gần gũi mang dấu ấn riêng của BA SỮA.',
    'Vận dụng kiến thức kinh tế học đường vào thực tiễn tổ chức, quản lý vốn và kiểm soát rủi ro.',
  ],
};

export const BUSINESS_OPPORTUNITIES: OpportunityItem[] = [
  {
    id: 'market-demand',
    index: '01',
    title: 'Nhu cầu thị trường',
    summary:
      'Trà sữa là loại đồ uống được nhiều bạn trẻ quan tâm, có nhiều lựa chọn về hương vị và topping.',
    analysis:
      'Sự linh hoạt trong cách kết hợp cốt trà, sữa và các loại trân châu giúp đồ uống luôn giữ được sức hút qua nhiều mùa trong năm.',
    indicator: 'Nhu cầu thường xuyên · Tính linh hoạt cao',
  },
  {
    id: 'target-customers',
    index: '02',
    title: 'Khách hàng mục tiêu',
    summary: 'Học sinh, sinh viên và giới trẻ yêu thích trải nghiệm hương vị mới mẻ.',
    analysis:
      'Nhóm khách hàng này dễ tiếp nhận các món mới, thích sự trẻ trung, bao bì đẹp và có xu hướng rủ bạn bè cùng thưởng thức.',
    indicator: 'Học sinh · Sinh viên · Giới trẻ',
  },
  {
    id: 'potential-market',
    index: '03',
    title: 'Thị trường tiềm năng',
    summary: 'Khu vực gần trường học, khu dân cư và nơi tập trung đông người trẻ.',
    analysis:
      'Lưu lượng người qua lại ổn định vào giờ tan học và cuối tuần tạo điều kiện thuận lợi để tiếp cận khách hàng tự nhiên mà không tốn quá nhiều chi phí mặt bằng lớn.',
    indicator: 'Gần trường học · Khu dân cư đông đúc',
  },
  {
    id: 'competitive-advantage',
    index: '04',
    title: 'Lợi thế cạnh tranh',
    summary:
      'Giá cả phù hợp, menu đa dạng, sáng tạo hương vị, dịch vụ thân thiện và hình ảnh thương hiệu riêng.',
    analysis:
      'Thay vì dàn trải quá nhiều món phức tạp, BA SỮA tập trung chuẩn hóa công thức cốt lõi để giữ giá hợp lý và thái độ phục vụ ấm áp.',
    indicator: 'Giá hợp lý · Hương vị sáng tạo · Thân thiện',
  },
  {
    id: 'growth-opportunity',
    index: '05',
    title: 'Cơ hội phát triển',
    summary: 'Quảng bá qua mạng xã hội, chương trình khách hàng thân thiết và mở rộng menu.',
    analysis:
      'Tận dụng kênh truyền thông học đường, thẻ tích điểm hoặc ưu đãi nhóm bạn giúp tăng tỷ lệ khách quay lại và mở rộng độ nhận diện thương hiệu.',
    indicator: 'Mạng xã hội · Thẻ thân thiết · Menu theo mùa',
  },
];

export const FEASIBILITY_FACTORS: FeasibilityFactor[] = [
  {
    id: 'customer-fit',
    title: 'Sự phù hợp với nhu cầu khách hàng',
    assessment: 'Thuận lợi',
    detail:
      'Đồ uống ngọt dịu, dễ tùy chỉnh lượng đường/đá và topping phù hợp với sở thích đa dạng của học sinh, sinh viên.',
    evidenceInModel: 'Định vị 3 dòng trà sữa chủ lực kèm mức giá vừa túi tiền học sinh.',
  },
  {
    id: 'capital-mobilization',
    title: 'Khả năng huy động vốn',
    assessment: 'Thuận lợi',
    detail:
      'Mô hình quy mô nhỏ (khởi điểm dự kiến 2.500.000 đồng) phù hợp để huy động từ nguồn tiết kiệm cá nhân, gia đình hoặc góp vốn nhóm học sinh.',
    evidenceInModel: 'Phân bổ vốn rõ ràng cho 5 hạng mục thiết yếu, hạn chế chi phí cố định lớn.',
  },
  {
    id: 'ingredient-supply',
    title: 'Nguồn cung nguyên liệu',
    assessment: 'Thuận lợi',
    detail:
      'Trà khô, sữa tươi, bột sữa, đường đen và nguyên liệu làm topping dễ tìm kiếm từ các nhà cung cấp uy tín có nguồn gốc rõ ràng.',
    evidenceInModel: 'Ưu tiên lựa chọn 2–3 nhà cung cấp dự phòng để tránh đứt gãy nguồn hàng.',
  },
  {
    id: 'location',
    title: 'Địa điểm kinh doanh',
    assessment: 'Thuận lợi',
    detail:
      'Có thể triển khai theo mô hình quầy nhỏ gọn gần cổng trường, khu dân cư hoặc bán theo đơn đặt trước trong dịp sự kiện trường học.',
    evidenceInModel: 'Tối ưu diện tích pha chế gọn nhẹ, dễ di chuyển và phục vụ mang đi.',
  },
  {
    id: 'competition',
    title: 'Khả năng cạnh tranh',
    assessment: 'Cần lưu ý',
    detail:
      'Thị trường trà sữa có nhiều đối thủ từ quán bình dân đến thương hiệu lớn nên cần tạo dấu ấn rõ ràng về hương vị và sự chăm sóc khách hàng.',
    evidenceInModel: 'Khác biệt bằng tên thương hiệu BA SỮA, thái độ gần gũi và đồ uống ít ngọt theo xu hướng.',
  },
  {
    id: 'challenges',
    title: 'Những khó khăn có thể gặp phải',
    assessment: 'Cần lưu ý',
    detail:
      'Thời gian đầu có thể gặp khó khăn về cân bằng thời gian học tập – vận hành, ước lượng nguyên liệu theo ngày và giữ độ ổn định hương vị.',
    evidenceInModel: 'Xây dựng quy trình đong định lượng chuẩn và kế hoạch kiểm kê cuối ngày.',
  },
];

export const SWOT_MATRIX: SwotQuadrant[] = [
  {
    key: 'S',
    label: 'Strengths',
    vietnameseTitle: 'Điểm mạnh (Bên trong)',
    tone: 'positive',
    points: [
      'Hiểu rõ tâm lý và khẩu vị của bạn bè cùng trang lứa.',
      'Vốn khởi điểm gọn nhẹ, linh hoạt thử nghiệm công thức mới.',
      'Phong cách thương hiệu BA SỮA trẻ trung, gần gũi và thân thiện.',
    ],
    takeaway: 'Tận dụng sự am hiểu khách hàng học sinh để tối ưu menu tinh gọn và giá hợp lý.',
  },
  {
    key: 'W',
    label: 'Weaknesses',
    vietnameseTitle: 'Điểm yếu (Bên trong)',
    tone: 'caution',
    points: [
      'Kinh nghiệm vận hành thực tế và quản lý nhân sự còn hạn chế.',
      'Ngân sách truyền thông nhỏ, độ nhận diện ban đầu chưa rộng.',
      'Quy mô nhỏ nên chưa tận dụng được lợi thế mua nguyên liệu số lượng lớn.',
    ],
    takeaway: 'Chuẩn hóa quy trình pha chế từng bước và ghi chép sổ sách tài chính hằng ngày.',
  },
  {
    key: 'O',
    label: 'Opportunities',
    vietnameseTitle: 'Cơ hội (Bên ngoài)',
    tone: 'positive',
    points: [
      'Nhu cầu thưởng thức trà sữa của giới trẻ duy trì đều đặn quanh năm.',
      'Mạng xã hội giúp lan tỏa hình ảnh sáng tạo với chi phí thấp.',
      'Các dịp hội chợ, văn nghệ, ngoại khóa học đường là cơ hội thử nghiệm mô hình.',
    ],
    takeaway: 'Chủ động nắm bắt xu hướng vị mới và tận dụng truyền thông truyền miệng.',
  },
  {
    key: 'T',
    label: 'Threats',
    vietnameseTitle: 'Thách thức (Bên ngoài)',
    tone: 'caution',
    points: [
      'Mức độ cạnh tranh cao từ nhiều tiệm trà sữa sẵn có quanh khu vực.',
      'Giá sữa, đường và topping có thể biến động theo thị trường.',
      'Sở thích đồ uống của giới trẻ thay đổi nhanh chóng theo xu hướng.',
    ],
    takeaway: 'Luôn lắng nghe phản hồi, linh hoạt điều chỉnh thực đơn và có quỹ dự phòng rủi ro.',
  },
];

export const COMPETENCIES: CompetencyItem[] = [
  {
    id: 'professional',
    index: '01',
    title: 'Năng lực chuyên môn',
    concept:
      'Là sự hiểu biết sâu sắc về sản phẩm, quy trình kỹ thuật, nguyên liệu, cách pha chế và kiểm soát chất lượng vệ sinh an toàn thực phẩm.',
    manifestation:
      'Người sáng lập BA SỮA nắm vững tỷ lệ ủ trà, nhiệt độ nước, thời gian nấu trân châu và quy chuẩn bảo quản sữa tươi trong ngày.',
    example:
      'Ví dụ thực tế: Khi pha Trà sữa đường đen, luôn cân định lượng trà ô long và sữa theo công thức chuẩn (ví dụ 150ml cốt trà – 40ml sữa đặc/sữa tươi) để 10 ly đều có vị đồng nhất.',
  },
  {
    id: 'management',
    index: '02',
    title: 'Năng lực quản lý',
    concept:
      'Là khả năng lập kế hoạch công việc, sắp xếp nguồn lực, phân công nhiệm vụ hợp lý và điều hành hoạt động trơn tru.',
    manifestation:
      'Phân chia rõ ràng các khâu trong tiệm BA SỮA: người chuẩn bị nguyên liệu, người pha chế, người đóng gói và người kiểm kê cuối ngày.',
    example:
      'Ví dụ thực tế: Lập bảng kiểm tra đầu buổi (Check-list nguyên liệu) và phân ca làm việc luân phiên giữa các thành viên nhóm vào giờ cao điểm tan học.',
  },
  {
    id: 'leadership',
    index: '03',
    title: 'Năng lực lãnh đạo',
    concept:
      'Là khả năng định hướng mục tiêu chung, truyền cảm hứng, gắn kết tập thể và tạo động lực để các thành viên cùng hoàn thành nhiệm vụ.',
    manifestation:
      'Chủ mô hình BA SỮA lắng nghe góp ý của cộng sự, động viên kịp thời khi lượng khách đông và giữ tinh thần tích cực trong nhóm.',
    example:
      'Ví dụ thực tế: Khi thử nghiệm món mới chưa đạt vị như mong muốn, người lãnh đạo cùng nhóm phân tích nguyên nhân thay vì trách móc, khuyến khích cả nhóm cải tiến công thức.',
  },
  {
    id: 'financial',
    index: '04',
    title: 'Năng lực tài chính',
    concept:
      'Là kỹ năng lập dự toán vốn, tính toán chi phí đầu vào, theo dõi doanh thu, ước tính lợi nhuận và kiểm soát ngân sách an toàn.',
    manifestation:
      'Ghi chép minh bạch toàn bộ 2.500.000 đồng vốn giả định của BA SỮA, phân tách rõ chi phí nguyên liệu tiêu hao và chi phí dụng cụ lâu dài.',
    example:
      'Ví dụ thực tế: Tính chi phí giá vốn từng ly (cốt trà, sữa, ly, ống hút) để định giá bán phù hợp với học sinh mà vẫn đảm bảo thu hồi vốn và có lãi hợp lý.',
  },
  {
    id: 'communication',
    index: '05',
    title: 'Năng lực giao tiếp',
    concept:
      'Là khả năng lắng nghe, truyền đạt rõ ràng, tư vấn tận tâm và xử lý khéo léo các phản hồi hoặc tình huống phát sinh với khách hàng.',
    manifestation:
      'Tạo sự thân thiện ngay từ lời chào, hỏi kỹ mức độ ngọt/đá khách mong muốn và cầu thị tiếp thu góp ý về hương vị.',
    example:
      'Ví dụ thực tế: Khi khách hàng nhận xét trà hơi ngọt so với khẩu vị, nhân viên BA SỮA mỉm cười cảm ơn, chủ động điều chỉnh lại độ ngọt và ghi chú cho lần sau.',
  },
  {
    id: 'creativity',
    index: '06',
    title: 'Năng lực sáng tạo',
    concept:
      'Là tư duy đổi mới liên tục trong phát triển sản phẩm, thiết kế hình ảnh thương hiệu, bao bì và trải nghiệm để tạo bản sắc riêng.',
    manifestation:
      'Sáng tạo câu slogan "Một ngụm ngọt ngào – Ba phần yêu thương", phối màu kem – nâu – hồng pastel và phát triển các dòng topping tự làm.',
    example:
      'Ví dụ thực tế: Thiết kế tem dán ly kèm những câu chúc học tập tích cực dành riêng cho mùa thi để tạo sự kết nối cảm xúc với các bạn học sinh.',
  },
  {
    id: 'opportunity-seizing',
    index: '07',
    title: 'Năng lực nắm bắt cơ hội',
    concept:
      'Là sự nhạy bén trong quan sát xu hướng thị trường, phát hiện nhu cầu mới và chủ động hành động đúng thời điểm.',
    manifestation:
      'Nhận thấy nhu cầu thưởng thức đồ uống giải nhiệt tăng mạnh vào mùa hè hoặc các sự kiện hội trại trường học để điều chỉnh thực đơn kịp thời.',
    example:
      'Ví dụ thực tế: Khi xu hướng đồ uống ít đường – thanh mát được giới trẻ quan tâm, BA SỮA nhanh chóng bổ sung lựa chọn trà sữa ít ngọt và trân châu trắng.',
  },
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    id: 'step-1',
    step: 'Bước 01',
    title: 'Khảo sát nhu cầu khách hàng',
    description:
      'Thu thập ý kiến từ bạn bè cùng lớp, học sinh trong trường về hương vị yêu thích, mức giá chấp nhận được và thời điểm hay mua đồ uống.',
    deliverable: 'Phiếu khảo sát nhanh & bảng tổng hợp sở thích khẩu vị.',
    linkedCompetency: 'Năng lực nắm bắt cơ hội & Giao tiếp',
  },
  {
    id: 'step-2',
    step: 'Bước 02',
    title: 'Xây dựng menu và thử nghiệm sản phẩm',
    description:
      'Chốt danh sách 3–5 món chủ lực dễ pha chế, tổ chức pha thử để nhóm bạn nếm thử và hiệu chỉnh tỷ lệ trà – sữa – đường chuẩn.',
    deliverable: 'Bảng công thức định lượng chuẩn cho từng loại đồ uống.',
    linkedCompetency: 'Năng lực chuyên môn & Sáng tạo',
  },
  {
    id: 'step-3',
    step: 'Bước 03',
    title: 'Tìm kiếm nguồn nguyên liệu',
    description:
      'So sánh chất lượng, hạn sử dụng và giá cả từ các đại lý trà, sữa tươi, bột làm trân châu đảm bảo an toàn thực phẩm.',
    deliverable: 'Danh sách nhà cung cấp chính & dự phòng kèm bảng giá.',
    linkedCompetency: 'Năng lực quản lý & Tài chính',
  },
  {
    id: 'step-4',
    step: 'Bước 04',
    title: 'Chuẩn bị vốn và dụng cụ',
    description:
      'Phân bổ ngân sách giả định 2.500.000 đồng, mua sắm bình lắc, ca đong, nồi nấu trân châu, ly nhựa và ống hút cần thiết.',
    deliverable: 'Bảng dự trù vốn chi tiết & bộ dụng cụ pha chế cơ bản.',
    linkedCompetency: 'Năng lực tài chính',
  },
  {
    id: 'step-5',
    step: 'Bước 05',
    title: 'Thiết kế thương hiệu và bao bì',
    description:
      'Hoàn thiện logo BA SỮA, bảng màu nâu – kem – hồng pastel, tem dán ly và thực đơn trình bày rõ ràng, dễ nhìn.',
    deliverable: 'Bộ nhận diện BA SỮA đồng bộ trên ly và bảng menu.',
    linkedCompetency: 'Năng lực sáng tạo',
  },
  {
    id: 'step-6',
    step: 'Bước 06',
    title: 'Quảng bá và giới thiệu sản phẩm',
    description:
      'Giới thiệu dự án qua bài đăng mạng xã hội, poster tại khu vực cho phép và chương trình trải nghiệm hương vị cho nhóm bạn.',
    deliverable: 'Nội dung truyền thông & kế hoạch ưu đãi ra mắt.',
    linkedCompetency: 'Năng lực giao tiếp & Lãnh đạo',
  },
  {
    id: 'step-7',
    step: 'Bước 07',
    title: 'Đánh giá kết quả kinh doanh',
    description:
      'Đối chiếu chi phí thực tế, lượng tiêu thụ và phản hồi của khách hàng để rút kinh nghiệm, cải tiến công thức và cách vận hành.',
    deliverable: 'Báo cáo tổng kết định kỳ & phương án cải thiện.',
    linkedCompetency: 'Năng lực quản lý & Tài chính',
  },
];

export const CAPITAL_ALLOCATIONS: CapitalAllocation[] = [
  {
    id: 'ingredients',
    label: 'Nguyên liệu ban đầu',
    amount: 850000,
    percentage: 34,
    color: '#6B4229',
    note: 'Trà khô, sữa tươi, đường đen, bột sữa, nguyên liệu nấu trân châu đợt đầu.',
  },
  {
    id: 'equipment',
    label: 'Dụng cụ pha chế',
    amount: 650000,
    percentage: 26,
    color: '#9C6B4E',
    note: 'Bình lắc (shaker), ca đong định lượng, muỗng khuấy, bình ủ trà, hộp bảo quản.',
  },
  {
    id: 'packaging',
    label: 'Ly, ống hút và bao bì',
    amount: 450000,
    percentage: 18,
    color: '#D98299',
    note: 'Ly có nắp, ống hút trân châu, túi đựng và tem nhãn thương hiệu BA SỮA.',
  },
  {
    id: 'marketing',
    label: 'Chi phí quảng cáo',
    amount: 300000,
    percentage: 12,
    color: '#E8A5B6',
    note: 'In bảng menu, tờ rơi giới thiệu nhẹ nhàng và chi phí truyền thông nhỏ ban đầu.',
  },
  {
    id: 'reserve',
    label: 'Chi phí dự phòng',
    amount: 250000,
    percentage: 10,
    color: '#CBB8A6',
    note: 'Khoản dự phòng cho biến động giá nguyên liệu hoặc phát sinh ngoài dự kiến.',
  },
];

export const TOTAL_CAPITAL = 2500000;

export const RISKS_AND_SOLUTIONS: RiskSolutionItem[] = [
  {
    id: 'risk-1',
    index: '01',
    risk: 'Cạnh tranh với các tiệm trà sữa khác',
    impact: 'Khách hàng có nhiều lựa chọn xung quanh, dễ bị phân tán sự chú ý.',
    solution:
      'Tập trung xây dựng bản sắc riêng cho BA SỮA: hương vị ít ngọt dễ uống, dịch vụ thân thiện, mức giá học sinh và giữ sự kết nối gần gũi với khách hàng quen.',
  },
  {
    id: 'risk-2',
    index: '02',
    risk: 'Giá nguyên liệu biến động',
    impact: 'Chi phí sữa, đường, trà tăng làm thu hẹp phần chênh lệch thu – chi.',
    solution:
      'Khảo sát sẵn 2–3 nhà cung cấp uy tín để so sánh giá, ưu tiên nguyên liệu theo mùa và sử dụng hiệu quả quỹ dự phòng 10%.',
  },
  {
    id: 'risk-3',
    index: '03',
    risk: 'Khách hàng thay đổi sở thích',
    impact: 'Món cũ dễ giảm sức hút nếu không bắt kịp khẩu vị mới của giới trẻ.',
    solution:
      'Đặt hộp góp ý nhỏ tại quầy hoặc khảo sát online định kỳ, thử nghiệm 1–2 hương vị mới theo mùa trước khi đưa vào menu chính.',
  },
  {
    id: 'risk-4',
    index: '04',
    risk: 'Chất lượng sản phẩm không đồng đều',
    impact: 'Ly ngon ly nhạt khiến khách hàng giảm tin tưởng vào thương hiệu.',
    solution:
      'Ban hành bảng công thức định lượng chuẩn theo mililit và gram, đào tạo kỹ người pha chế và kiểm tra vị trà trước khi phục vụ.',
  },
  {
    id: 'risk-5',
    index: '05',
    risk: 'Tình trạng tồn kho và lãng phí nguyên liệu',
    impact: 'Trà ủ dư hoặc trân châu nấu thừa qua ngày gây thất thoát vốn.',
    solution:
      'Áp dụng nguyên tắc "Nhập trước – Dùng trước", nấu trân châu thành nhiều mẻ nhỏ theo khung giờ cao điểm thay vì nấu một lần quá nhiều.',
  },
];

export const CLOSING_POINTS = [
  'Ý tưởng BA SỮA xuất phát từ nhu cầu thưởng thức đồ uống thực tế, gần gũi với đời sống học sinh và giới trẻ.',
  'Mô hình sở hữu cơ hội phát triển khả thi nếu biết xác định đúng khách hàng mục tiêu, địa điểm và lợi thế cạnh tranh.',
  'Người kinh doanh cần trang bị toàn diện kiến thức, kỹ năng quản lý – tài chính, tư duy sáng tạo và khả năng thích ứng.',
  'Thành công không chỉ dừng ở ý tưởng hay trên giấy, mà quyết định bởi năng lực tổ chức và thực hiện kỷ luật.',
];
