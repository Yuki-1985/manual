export interface SubItem {
  id: string;
  title: string;
  description: string;
}

export interface MenuItem {
  id:string;
  title: string;
  items: SubItem[];
}

export const menuData: MenuItem[] = [
  {
    id: 'organization',
    title: '組織図',
    items: [
      { id: 'role-structure', title: '役割・体制', description: '組織の役割分担と体制図に関する情報です。' },
      { id: 'services', title: '利用サービス', description: '全社で利用しているサービスの一覧です。' },
    ],
  },
  {
    id: 'accounting',
    title: '経理・会計',
    items: [
      { id: 'billing-issue', title: '請求書（発行）', description: '取引先への請求書発行手順について説明します。' },
      { id: 'billing-receive', title: '請求書（受領）', description: '受領した請求書の処理方法について説明します。' },
      { id: 'expenses', title: '経費', description: '経費申請の手順とルールについてです。' },
      { id: 'journalizing', title: '仕分・記帳', description: '日々の取引の仕訳と記帳に関するルールです。' },
      { id: 'settlement', title: '決算', description: '月次・年次決算のプロセスについて説明します。' },
    ],
  },
  {
    id: 'hr',
    title: '人事・労務',
    items: [
      { id: 'onboarding-offboarding', title: '入社・退職者対応', description: '新しい仲間を迎える際や退職者が出た際の手続きです。' },
      { id: 'time-management', title: '勤怠管理', description: '勤怠の打刻や管理方法についてです。' },
      { id: 'payroll', title: '給与計算', description: '給与計算のプロセスとスケジュールです。' },
      { id: 'social-insurance', title: '社会保険対応', description: '社会保険に関する手続きについてです。' },
    ],
  },
  {
    id: 'general-affairs',
    title: '総務',
    items: [
      { id: 'contract-management', title: '契約書管理', description: '契約書の作成、レビュー、保管に関するルールです。' },
      { id: 'service-subscription', title: '契約サービス管理', description: '契約しているサービスの管理方法です。' },
      { id: 'asset-management', title: '資産・備品管理', description: '会社の資産や備品の管理についてです。' },
      { id: 'facility-management', title: '施設管理', description: 'オフィスや施設の管理に関する情報です。' },
      { id: 'other', title: 'その他', description: 'その他の総務に関する業務についてです。' },
    ],
  },
  {
    id: 'info-sys',
    title: '情シス',
    items: [
      { id: 'internal-rules', title: '社内規定', description: '情報システムに関する社内規定です。' },
      { id: 'security', title: 'セキュリティ', description: '情報セキュリティポリシーと対策についてです。' },
      { id: 'compliance', title: 'コンプライアンス', description: '法規制やコンプライアンスに関する情報です。' },
    ],
  },
];