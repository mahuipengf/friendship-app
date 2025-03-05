const arr = [
  { code: '00', externalInfo: {}, parentCode: null, name: '一般职业', standardCode: '00' },
  { code: '01', externalInfo: {}, parentCode: null, name: '农牧业', standardCode: '01' },
  { code: '20', externalInfo: {}, parentCode: null, name: '体育', standardCode: '20' },
  { code: '21', externalInfo: {}, parentCode: null, name: '其它', standardCode: '21' },
  {
    code: '0001',
    parentCode: '00',
    externalInfo: {},
    name: '机关．团体．公司',
    standardCode: '0001',
  },
  {
    code: '000101',
    externalInfo: { riskLevel: '1' },
    name: '普通公务员．职员（内勤人员）',
    parentCode: '0001',
    standardCode: '000101',
  },
  { code: '2001', externalInfo: {}, name: '球类', parentCode: '20', standardCode: '2010' },
  {
    code: '200106',
    externalInfo: { riskLevel: '5' },
    name: '曲棍球运动员',
    parentCode: '2001',
    standardCode: '200104',
  },
];

const func = (arr) => {
   return arr.map(item => {
    return {
        label: '父级',
        value: item?.parentCode,
        children: {
            label: '子级',
            value: item?.code,
            children: {
                label: '孙子级',
                value: item?.standardCode
            }
        }
    }
   })
}