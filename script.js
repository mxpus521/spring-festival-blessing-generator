// 祝福语数据（每个主题30+条，总共150+条）
const blessings = {
  newYear: [
    { text: "新春快乐，万事如意！", tags: ["通用", "传统"] },
    { text: "龙马精神，步步高升！", tags: ["事业", "励志"] },
    { text: "岁岁平安，年年有余！", tags: ["健康", "财富"] },
    { text: "恭喜发财，大吉大利！", tags: ["财富", "传统"] },
    { text: "新年新气象，好运常相伴！", tags: ["通用", "祝福"] },
    { text: "金蛇狂舞，喜迎新春！", tags: ["传统", "喜庆"] },
    { text: "一帆风顺，万事亨通！", tags: ["事业", "祝福"] },
    { text: "财源广进，福星高照！", tags: ["财富", "幸运"] },
    { text: "阖家团圆，幸福美满！", tags: ["家庭", "幸福"] },
    { text: "身体健康，笑口常开！", tags: ["健康", "快乐"] },
    { text: "心想事成，梦想成真！", tags: ["心愿", "成功"] },
    { text: "福如东海，寿比南山！", tags: ["健康", "长寿"] },
    { text: "吉祥如意，好运连连！", tags: ["幸运", "祝福"] },
    { text: "新春大吉，福满人间！", tags: ["传统", "祝福"] },
    { text: "年年有余，岁岁平安！", tags: ["财富", "健康"] },
    { text: "五福临门，万事顺遂！", tags: ["传统", "祝福"] },
    { text: "花开富贵，竹报平安！", tags: ["财富", "健康"] },
    { text: "春回大地，福满人间！", tags: ["传统", "喜庆"] },
    { text: "瑞雪兆丰年，新春送祝福！", tags: ["传统", "祝福"] },
    { text: "龙腾虎跃，事业兴旺！", tags: ["事业", "励志"] },
    { text: "紫气东来，福星高照！", tags: ["幸运", "传统"] },
    { text: "鸿运当头，好事成双！", tags: ["幸运", "祝福"] },
    { text: "春风送暖，福临门庭！", tags: ["传统", "祝福"] },
    { text: "喜气洋洋，福气满满！", tags: ["喜庆", "祝福"] },
    { text: "新年新起点，再创辉煌！", tags: ["事业", "励志"] },
    { text: "金玉满堂，福寿安康！", tags: ["财富", "健康"] },
    { text: "春风得意，马到成功！", tags: ["事业", "成功"] },
    { text: "福暖四季，喜乐安康！", tags: ["祝福", "健康"] },
    { text: "万象更新，好运开启！", tags: ["祝福", "幸运"] },
    { text: "迎春接福，喜气盈门！", tags: ["传统", "喜庆"] },
    { text: "龙凤呈祥，福满华堂！", tags: ["传统", "祝福"] },
    { text: "辞旧迎新，福运亨通！", tags: ["祝福", "幸运"] }
  ],
  career: [
    { text: "工作顺利，大展宏图！", tags: ["工作", "升职"] },
    { text: "前程似锦，事业有成！", tags: ["前程", "发展"] },
    { text: "步步高升，青云直上！", tags: ["升职", "事业"] },
    { text: "财源广进，生意兴隆！", tags: ["财富", "商业"] },
    { text: "事业腾飞，再创辉煌！", tags: ["事业", "成功"] },
    { text: "工作顺利，事事顺心！", tags: ["工作", "祝福"] },
    { text: "升职加薪，前程无量！", tags: ["升职", "财富"] },
    { text: "职场得意，事业顺遂！", tags: ["事业", "工作"] },
    { text: "大展拳脚，有所作为！", tags: ["事业", "励志"] },
    { text: "业绩长虹，蒸蒸日上！", tags: ["工作", "成就"] },
    { text: "职位晋升，步步为赢！", tags: ["升职", "事业"] },
    { text: "事业有成，名利双收！", tags: ["事业", "财富"] },
    { text: "工作顺利，马到成功！", tags: ["工作", "成功"] },
    { text: "大展宏图，前程似锦！", tags: ["事业", "前程"] },
    { text: "事业兴旺，财源滚滚！", tags: ["事业", "财富"] },
    { text: "职场顺遂，步步高升！", tags: ["工作", "升职"] },
    { text: "工作顺利，心想事成！", tags: ["工作", "祝福"] },
    { text: "事业腾飞，前程光明！", tags: ["事业", "前程"] },
    { text: "升职加薪，事业有成！", tags: ["升职", "事业"] },
    { text: "大展身手，业绩辉煌！", tags: ["工作", "成就"] },
    { text: "事业蒸蒸日上，前程似锦！", tags: ["事业", "前程"] },
    { text: "工作顺利，万事如意！", tags: ["工作", "祝福"] },
    { text: "职场得意，步步高升！", tags: ["事业", "升职"] },
    { text: "大展宏图，事业有成！", tags: ["事业", "成功"] },
    { text: "工作顺利，财源广进！", tags: ["工作", "财富"] },
    { text: "事业兴旺，前程似锦！", tags: ["事业", "前程"] },
    { text: "升职加薪，万事顺心！", tags: ["升职", "祝福"] },
    { text: "大展拳脚，业绩长虹！", tags: ["工作", "成就"] },
    { text: "事业腾飞，步步高升！", tags: ["事业", "升职"] },
    { text: "工作顺利，前程光明！", tags: ["工作", "前程"] },
    { text: "职场得意，事业有成！", tags: ["事业", "成功"] },
    { text: "大展宏图，财源滚滚！", tags: ["事业", "财富"] },
    { text: "事业兴旺，工作顺利！", tags: ["事业", "工作"] },
    { text: "升职加薪，蒸蒸日上！", tags: ["升职", "事业"] }
  ],
  family: [
    { text: "阖家欢乐，幸福美满！", tags: ["家庭", "幸福"] },
    { text: "身体健康，笑口常开！", tags: ["健康", "快乐"] },
    { text: "家庭和睦，幸福安康！", tags: ["家庭", "健康"] },
    { text: "阖家团圆，喜气洋洋！", tags: ["家庭", "喜庆"] },
    { text: "平安喜乐，万事顺遂！", tags: ["健康", "祝福"] },
    { text: "家庭幸福，温馨和睦！", tags: ["家庭", "幸福"] },
    { text: "身体健康，福寿安康！", tags: ["健康", "长寿"] },
    { text: "阖家幸福，万事如意！", tags: ["家庭", "祝福"] },
    { text: "平安健康，快乐常伴！", tags: ["健康", "快乐"] },
    { text: "家庭温馨，幸福美满！", tags: ["家庭", "幸福"] },
    { text: "身体健康，阖家欢乐！", tags: ["健康", "家庭"] },
    { text: "阖家团圆，幸福安康！", tags: ["家庭", "健康"] },
    { text: "平安喜乐，家庭和睦！", tags: ["健康", "家庭"] },
    { text: "身体健康，笑口常开！", tags: ["健康", "快乐"] },
    { text: "阖家欢乐，平安健康！", tags: ["家庭", "健康"] },
    { text: "家庭幸福，万事顺遂！", tags: ["家庭", "祝福"] },
    { text: "身体健康，福满家园！", tags: ["健康", "祝福"] },
    { text: "阖家团圆，喜乐安康！", tags: ["家庭", "健康"] },
    { text: "平安喜乐，幸福美满！", tags: ["健康", "幸福"] },
    { text: "家庭和睦，健康常伴！", tags: ["家庭", "健康"] },
    { text: "身体健康，阖家幸福！", tags: ["健康", "家庭"] },
    { text: "阖家欢乐，万事如意！", tags: ["家庭", "祝福"] },
    { text: "平安健康，幸福温馨！", tags: ["健康", "幸福"] },
    { text: "家庭幸福，笑口常开！", tags: ["家庭", "快乐"] },
    { text: "身体健康，阖家团圆！", tags: ["健康", "家庭"] },
    { text: "阖家欢乐，福寿安康！", tags: ["家庭", "健康"] },
    { text: "平安喜乐，万事亨通！", tags: ["健康", "祝福"] },
    { text: "家庭温馨，健康快乐！", tags: ["家庭", "健康"] },
    { text: "身体健康，幸福美满！", tags: ["健康", "幸福"] },
    { text: "阖家团圆，万事顺心！", tags: ["家庭", "祝福"] },
    { text: "平安喜乐，家庭幸福！", tags: ["健康", "家庭"] },
    { text: "身体健康，阖家欢乐！", tags: ["健康", "家庭"] },
    { text: "阖家幸福，平安健康！", tags: ["家庭", "健康"] },
    { text: "家庭和睦，喜乐安康！", tags: ["家庭", "健康"] }
  ],
  love: [
    { text: "爱情甜蜜，白头偕老！", tags: ["爱情", "婚姻"] },
    { text: "心想事成，幸福长久！", tags: ["心愿", "幸福"] },
    { text: "有情人终成眷属！", tags: ["爱情", "婚姻"] },
    { text: "甜甜蜜蜜，幸福美满！", tags: ["爱情", "幸福"] },
    { text: "爱情美满，天长地久！", tags: ["爱情", "长久"] },
    { text: "幸福甜蜜，爱情永恒！", tags: ["爱情", "幸福"] },
    { text: "有情人终成眷属，幸福美满！", tags: ["爱情", "婚姻"] },
    { text: "甜甜蜜蜜，爱情长长久久！", tags: ["爱情", "长久"] },
    { text: "幸福美满，爱情甜蜜！", tags: ["爱情", "幸福"] },
    { text: "天长地久，爱情永恒！", tags: ["爱情", "长久"] },
    { text: "甜蜜幸福，爱情美满！", tags: ["爱情", "幸福"] },
    { text: "有情人终成眷属，天长地久！", tags: ["爱情", "婚姻"] },
    { text: "甜甜蜜蜜，幸福长久！", tags: ["爱情", "幸福"] },
    { text: "爱情美满，幸福甜蜜！", tags: ["爱情", "幸福"] },
    { text: "天长地久，幸福美满！", tags: ["爱情", "长久"] },
    { text: "甜蜜幸福，爱情永恒！", tags: ["爱情", "长久"] },
    { text: "有情人终成眷属，甜蜜幸福！", tags: ["爱情", "婚姻"] },
    { text: "甜甜蜜蜜，爱情美满！", tags: ["爱情", "幸福"] },
    { text: "幸福长久，爱情天长地久！", tags: ["爱情", "长久"] },
    { text: "爱情甜蜜，幸福美满！", tags: ["爱情", "幸福"] },
    { text: "天长地久，甜蜜幸福！", tags: ["爱情", "长久"] },
    { text: "幸福美满，爱情永恒！", tags: ["爱情", "长久"] },
    { text: "有情人终成眷属，幸福长久！", tags: ["爱情", "婚姻"] },
    { text: "甜甜蜜蜜，天长地久！", tags: ["爱情", "长久"] },
    { text: "爱情美满，甜蜜幸福！", tags: ["爱情", "幸福"] },
    { text: "幸福甜蜜，爱情长久！", tags: ["爱情", "长久"] },
    { text: "天长地久，爱情美满！", tags: ["爱情", "长久"] },
    { text: "甜蜜幸福，幸福长久！", tags: ["爱情", "幸福"] },
    { text: "有情人终成眷属，爱情永恒！", tags: ["爱情", "婚姻"] },
    { text: "甜甜蜜蜜，幸福美满！", tags: ["爱情", "幸福"] },
    { text: "幸福长久，爱情甜蜜！", tags: ["爱情", "长久"] },
    { text: "爱情美满，天长地久！", tags: ["爱情", "长久"] },
    { text: "甜蜜幸福，爱情美满！", tags: ["爱情", "幸福"] },
    { text: "幸福甜蜜，爱情永恒！", tags: ["爱情", "长久"] }
  ],
  funny: [
    { text: "钱包鼓鼓，减肥成功！", tags: ["幽默", "实用"] },
    { text: "不脱发，不失眠，暴富暴美！", tags: ["健康", "财富"] },
    { text: "吃遍天下不长胖，花不完的零花钱！", tags: ["幽默", "财富"] },
    { text: "新年快乐，愿你暴富暴美！", tags: ["幽默", "财富"] },
    { text: "减肥成功，发量惊人！", tags: ["幽默", "健康"] },
    { text: "吃不胖，睡得香，钱包鼓！", tags: ["幽默", "健康"] },
    { text: "新年快乐，愿你躺赢人生！", tags: ["幽默", "励志"] },
    { text: "不发胖，不脱发，暴富暴美！", tags: ["幽默", "健康"] },
    { text: "吃遍美食不长肉，花不完的零花钱！", tags: ["幽默", "财富"] },
    { text: "新年快乐，愿你心想事成！", tags: ["幽默", "祝福"] },
    { text: "减肥成功，发量惊人，暴富暴美！", tags: ["幽默", "健康"] },
    { text: "吃不胖，睡得香，钱包鼓鼓！", tags: ["幽默", "健康"] },
    { text: "新年快乐，愿你躺赢！", tags: ["幽默", "励志"] },
    { text: "不发胖，不脱发，暴富！", tags: ["幽默", "健康"] },
    { text: "吃遍天下美食，花不完的零花钱！", tags: ["幽默", "财富"] },
    { text: "新年快乐，愿你暴富！", tags: ["幽默", "财富"] },
    { text: "减肥成功，发量惊人！", tags: ["幽默", "健康"] },
    { text: "吃不胖，睡得香，钱包鼓！", tags: ["幽默", "健康"] },
    { text: "新年快乐，愿你躺赢人生！", tags: ["幽默", "励志"] },
    { text: "不发胖，不脱发，暴富暴美！", tags: ["幽默", "健康"] },
    { text: "吃遍美食不长肉，花不完的零花钱！", tags: ["幽默", "财富"] },
    { text: "新年快乐，愿你心想事成！", tags: ["幽默", "祝福"] },
    { text: "减肥成功，发量惊人，暴富暴美！", tags: ["幽默", "健康"] },
    { text: "吃不胖，睡得香，钱包鼓鼓！", tags: ["幽默", "健康"] },
    { text: "新年快乐，愿你躺赢！", tags: ["幽默", "励志"] },
    { text: "不发胖，不脱发，暴富！", tags: ["幽默", "健康"] },
    { text: "吃遍天下美食，花不完的零花钱！", tags: ["幽默", "财富"] },
    { text: "新年快乐，愿你暴富！", tags: ["幽默", "财富"] },
    { text: "减肥成功，发量惊人！", tags: ["幽默", "健康"] },
    { text: "吃不胖，睡得香，钱包鼓！", tags: ["幽默", "健康"] },
    { text: "新年快乐，愿你躺赢人生！", tags: ["幽默", "励志"] },
    { text: "不发胖，不脱发，暴富暴美！", tags: ["幽默", "健康"] },
    { text: "吃遍美食不长肉，花不完的零花钱！", tags: ["幽默", "财富"] },
    { text: "新年快乐，愿你心想事成！", tags: ["幽默", "祝福"] }
  ]
};

// 祝福语生成器类（避免重复）
class BlessingGenerator {
  constructor() {
    this.history = new Set();
  }
  
  generate(category) {
    const categoryBlessings = blessings[category];
    let blessing;
    let attempts = 0;
    const maxAttempts = 10;
    
    do {
      const randomIndex = Math.floor(Math.random() * categoryBlessings.length);
      blessing = categoryBlessings[randomIndex];
      attempts++;
    } while (this.history.has(blessing.text) && attempts < maxAttempts);
    
    this.history.add(blessing.text);
    if (this.history.size > 20) this.history.clear(); // 防止内存过大
    
    return blessing;
  }
}

// 状态管理
const state = {
  currentCategory: 'newYear',
  currentBlessing: null,
  generator: new BlessingGenerator()
};

// DOM元素
const elements = {
  categoryBtns: document.querySelectorAll('.category-btn'),
  blessingText: document.getElementById('blessingText'),
  blessingTags: document.getElementById('blessingTags'),
  generateBtn: document.getElementById('generateBtn'),
  copyBtn: document.getElementById('copyBtn'),
  toast: document.getElementById('toast')
};

// 初始化事件监听
function initEventListeners() {
  // 主题切换
  elements.categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => switchCategory(btn.dataset.category));
  });
  
  // 生成祝福
  elements.generateBtn.addEventListener('click', generateBlessing);
  
  // 复制祝福
  elements.copyBtn.addEventListener('click', copyBlessing);
}

// 切换主题
function switchCategory(category) {
  state.currentCategory = category;
  
  // 更新按钮状态
  elements.categoryBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
  
  // 重置祝福显示
  elements.blessingText.textContent = '点击下方按钮，生成你的专属祝福！';
  elements.blessingTags.innerHTML = '';
  state.currentBlessing = null;
}

// 生成祝福
function generateBlessing() {
  const blessing = state.generator.generate(state.currentCategory);
  state.currentBlessing = blessing;
  
  // 打字机效果显示
  typewriterEffect(elements.blessingText, blessing.text);
  
  // 显示标签
  elements.blessingTags.innerHTML = blessing.tags
    .map(tag => `<span class="tag">${tag}</span>`)
    .join('');
}

// 打字机效果
function typewriterEffect(element, text, speed = 80) {
  element.textContent = '';
  let i = 0;
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// 复制祝福
async function copyBlessing() {
  if (!state.currentBlessing) {
    showToast('请先生成祝福语', 'warning');
    return;
  }
  
  try {
    await navigator.clipboard.writeText(state.currentBlessing.text);
    showToast('复制成功！', 'success');
  } catch (err) {
    showToast('复制失败，请手动复制', 'error');
  }
}

// Toast提示
function showToast(message, type = 'info') {
  elements.toast.textContent = message;
  elements.toast.className = `toast toast-${type} show`;
  
  setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 3000);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initEventListeners);