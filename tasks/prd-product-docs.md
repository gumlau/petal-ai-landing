# PRD: Petal GTD 产品管理文档系统

## Introduction

为 Petal GTD 产品创建一套产品管理知识文档。这些文档基于 `.claude/skills` 中的 21 个产品管理技能，但核心目标不是翻译技能内容，而是**运用每个技能的方法论来分析 Petal GTD 产品的现状、挑战和发展方向**。

作为独立开发者，你需要一套系统化的产品思考框架，帮助你将 Petal GTD 从一个 Things3 克隆产品转型为一个真正差异化的产品。

## Goals

- 建立结构化的产品管理文档体系，作为个人知识库
- 用 21 个产品管理技能的方法论系统性分析 Petal GTD
- 为产品转型/Pivot 提供决策依据
- 所有文档使用中文，便于快速查阅和思考

## User Stories

### US-001: 创建文档目录结构
**Description:** 作为开发者，我需要一个清晰的文档目录结构，以便按主题分类组织 21 个产品文档。

**Acceptance Criteria:**
- [ ] 创建 `docs/` 根目录
- [ ] 创建 `docs/product-strategy/` 目录（产品战略类）
- [ ] 创建 `docs/user-research/` 目录（用户研究类）
- [ ] 创建 `docs/execution/` 目录（执行落地类）
- [ ] 创建 `docs/README.md` 索引文件，列出所有文档及其分类

---

### US-002: 编写北极星指标文档
**Description:** 作为产品负责人，我需要运用北极星指标方法论分析 Petal GTD 应该追踪什么核心指标。

**Acceptance Criteria:**
- [ ] 创建 `docs/product-strategy/north-star-metrics.md`
- [ ] 分析 Petal GTD 的核心价值交付点（任务完成？习惯养成？）
- [ ] 提出 2-3 个候选北极星指标并分析优劣
- [ ] 给出推荐的北极星指标及其定义
- [ ] 识别防止指标被 gaming 的护栏指标
- [ ] 引用 `.claude/skills/writing-north-star-metrics/SKILL.md` 中的核心原则

---

### US-003: 编写产品愿景文档
**Description:** 作为产品负责人，我需要定义 Petal GTD 的长期产品愿景，区别于 "Things3 克隆"。

**Acceptance Criteria:**
- [ ] 创建 `docs/product-strategy/product-vision.md`
- [ ] 描述 5-10 年后用户世界的理想状态（不提产品功能）
- [ ] 分析当前 "GTD 任务管理" 愿景的局限性
- [ ] 探索可能的差异化愿景方向
- [ ] 确保愿景足够具体，能指导团队决策
- [ ] 引用 `.claude/skills/defining-product-vision/SKILL.md` 中的核心原则

---

### US-004: 编写路线图优先级文档
**Description:** 作为产品负责人，我需要一个框架来决定下一步应该做什么功能。

**Acceptance Criteria:**
- [ ] 创建 `docs/product-strategy/roadmap-prioritization.md`
- [ ] 分析当前 Petal GTD 的功能成熟度
- [ ] 列出可能的下一步方向（深化 GTD、AI 集成、协作、移动端等）
- [ ] 提供优先级排序框架
- [ ] 基于增长模型分析应该先做什么
- [ ] 引用 `.claude/skills/prioritizing-roadmap/SKILL.md` 中的核心原则

---

### US-005: 编写 OKR 与目标设定文档
**Description:** 作为产品负责人，我需要为 Petal GTD 设定清晰的季度/年度目标。

**Acceptance Criteria:**
- [ ] 创建 `docs/product-strategy/okrs-and-goals.md`
- [ ] 分析独立开发者场景下 OKR 的适用性
- [ ] 为 Petal GTD 设定示例 OKR（Q1/Q2）
- [ ] 区分输入指标和输出指标
- [ ] 避免 "toddler soccer" 问题
- [ ] 引用 `.claude/skills/setting-okrs-goals/SKILL.md` 中的核心原则

---

### US-006: 编写竞争分析文档
**Description:** 作为产品负责人，我需要系统分析 Petal GTD 的竞争环境。

**Acceptance Criteria:**
- [ ] 创建 `docs/product-strategy/competitive-analysis.md`
- [ ] 识别直接竞品（Things3, Todoist, TickTick, Notion 等）
- [ ] 识别间接竞品（纸笔、Excel、不行动）
- [ ] 分析每个竞品的核心优势和弱点
- [ ] 找出 Petal GTD 可以利用的不对称优势
- [ ] 引用 `.claude/skills/competitive-analysis/SKILL.md` 中的核心原则

---

### US-007: 编写 PRD 写作指南文档
**Description:** 作为开发者，我需要一个 PRD 写作模板和最佳实践指南。

**Acceptance Criteria:**
- [ ] 创建 `docs/execution/writing-prds.md`
- [ ] 总结当前项目 PRD 的写作模式
- [ ] 提供适合独立开发者的简化 PRD 模板
- [ ] 讨论 AI 时代 PRD 的变化（原型优先 vs 文档优先）
- [ ] 引用 `.claude/skills/writing-prds/SKILL.md` 中的核心原则

---

### US-008: 编写问题定义文档
**Description:** 作为产品负责人，我需要明确 Petal GTD 解决的核心问题。

**Acceptance Criteria:**
- [ ] 创建 `docs/user-research/problem-definition.md`
- [ ] 通过 dogfooding 分析自己使用产品时的痛点
- [ ] 定义目标用户画像
- [ ] 明确核心问题陈述（Problem Statement）
- [ ] 区分 "nice to have" 和 "must have" 问题
- [ ] 引用 `.claude/skills/problem-definition/SKILL.md` 中的核心原则

---

### US-009: 编写规格与设计文档
**Description:** 作为开发者，我需要一个技术规格和设计文档的写作指南。

**Acceptance Criteria:**
- [ ] 创建 `docs/execution/specs-and-designs.md`
- [ ] 总结低保真设计 vs 高保真设计的权衡
- [ ] 提供适合独立开发的设计流程
- [ ] 讨论何时需要详细规格，何时直接编码
- [ ] 引用 `.claude/skills/writing-specs-designs/SKILL.md` 中的核心原则

---

### US-010: 编写范围控制文档
**Description:** 作为独立开发者，我需要学会控制功能范围，避免过度工程。

**Acceptance Criteria:**
- [ ] 创建 `docs/execution/scoping-and-cutting.md`
- [ ] 分析 Petal GTD 当前功能的必要性
- [ ] 提出 MLP（Minimum Lovable Product）vs MVP 的思考
- [ ] 识别可以删除或简化的功能
- [ ] 提供功能裁剪的决策框架
- [ ] 引用 `.claude/skills/scoping-cutting/SKILL.md` 中的核心原则

---

### US-011: 编写逆向工作法文档
**Description:** 作为产品负责人，我需要从理想终态反推产品策略。

**Acceptance Criteria:**
- [ ] 创建 `docs/product-strategy/working-backwards.md`
- [ ] 为 Petal GTD 写一份假想的发布新闻稿
- [ ] 从用户视角描述理想的产品体验
- [ ] 反推需要构建的核心能力
- [ ] 引用 `.claude/skills/working-backwards/SKILL.md` 中的核心原则

---

### US-012: 编写用户访谈文档
**Description:** 作为产品负责人，我需要一个用户访谈的方法论和问题模板。

**Acceptance Criteria:**
- [ ] 创建 `docs/user-research/user-interviews.md`
- [ ] 提供用户访谈问题模板
- [ ] 讨论独立开发者如何找到访谈对象
- [ ] 总结观察法 vs 访谈法的差异
- [ ] 规划 Petal GTD 的用户研究计划
- [ ] 引用 `.claude/skills/conducting-user-interviews/SKILL.md` 中的核心原则

---

### US-013: 编写调研设计文档
**Description:** 作为产品负责人，我需要知道如何设计有效的用户调研问卷。

**Acceptance Criteria:**
- [ ] 创建 `docs/user-research/survey-design.md`
- [ ] 提供 PMF 调研问卷模板
- [ ] 提供 NPS 调研最佳实践
- [ ] 讨论定量调研的样本量要求
- [ ] 引用 `.claude/skills/designing-surveys/SKILL.md` 中的核心原则

---

### US-014: 编写用户反馈分析文档
**Description:** 作为产品负责人，我需要系统化收集和分析用户反馈。

**Acceptance Criteria:**
- [ ] 创建 `docs/user-research/feedback-analysis.md`
- [ ] 规划 Petal GTD 的反馈收集渠道
- [ ] 提供反馈分类和优先级框架
- [ ] 讨论如何从 Reddit、Twitter 等平台收集真实反馈
- [ ] 引用 `.claude/skills/analyzing-user-feedback/SKILL.md` 中的核心原则

---

### US-015: 编写可用性测试文档
**Description:** 作为产品负责人，我需要验证产品的可用性。

**Acceptance Criteria:**
- [ ] 创建 `docs/user-research/usability-testing.md`
- [ ] 提供独立开发者可执行的简化可用性测试方法
- [ ] 讨论 AI 工具在原型测试中的应用
- [ ] 设计 Petal GTD 的关键任务流程测试
- [ ] 引用 `.claude/skills/usability-testing/SKILL.md` 中的核心原则

---

### US-016: 编写产品发布文档
**Description:** 作为产品负责人，我需要规划 Petal GTD 的发布策略。

**Acceptance Criteria:**
- [ ] 创建 `docs/execution/shipping-products.md`
- [ ] 分析当前产品的发布就绪度
- [ ] 规划 beta 发布策略
- [ ] 讨论 Product Hunt 发布策略
- [ ] 制定发布检查清单
- [ ] 引用 `.claude/skills/shipping-products/SKILL.md` 中的核心原则

---

### US-017: 编写时间管理文档
**Description:** 作为独立开发者，我需要有效管理开发时间。

**Acceptance Criteria:**
- [ ] 创建 `docs/execution/timeline-management.md`
- [ ] 分析独立开发者的时间分配挑战
- [ ] 提供任务估算技巧
- [ ] 讨论如何避免 "生产性拖延"
- [ ] 引用 `.claude/skills/managing-timelines/SKILL.md` 中的核心原则

---

### US-018: 编写产品品味文档
**Description:** 作为产品负责人，我需要培养产品品味和直觉。

**Acceptance Criteria:**
- [ ] 创建 `docs/product-strategy/product-taste.md`
- [ ] 分析 Things3 为什么被认为有 "好品味"
- [ ] 讨论 AI 时代品味的重要性
- [ ] 提供培养产品品味的方法
- [ ] 引用 `.claude/skills/product-taste-intuition/SKILL.md` 中的核心原则

---

### US-019: 编写产品运营文档
**Description:** 作为产品负责人，我需要理解产品运营的职能。

**Acceptance Criteria:**
- [ ] 创建 `docs/execution/product-operations.md`
- [ ] 分析独立开发者场景下产品运营的适用性
- [ ] 讨论如何建立用户反馈闭环
- [ ] 规划数据驱动决策的基础设施
- [ ] 引用 `.claude/skills/product-operations/SKILL.md` 中的核心原则

---

### US-020: 编写行为产品设计文档
**Description:** 作为产品负责人，我需要应用行为科学设计产品。

**Acceptance Criteria:**
- [ ] 创建 `docs/product-strategy/behavioral-design.md`
- [ ] 分析 GTD 方法论中的行为心理学原理
- [ ] 讨论如何通过设计促进习惯养成
- [ ] 应用损失厌恶、承诺一致性等原理
- [ ] 引用 `.claude/skills/behavioral-product-design/SKILL.md` 中的核心原则

---

### US-021: 编写创业想法验证文档
**Description:** 作为创业者，我需要验证 Petal GTD 的商业可行性。

**Acceptance Criteria:**
- [ ] 创建 `docs/product-strategy/startup-ideation.md`
- [ ] 分析 GTD 工具市场是否是 "tar pit"（焦油坑）
- [ ] 评估市场规模和增长潜力
- [ ] 讨论差异化定位的可能性
- [ ] 引用 `.claude/skills/startup-ideation/SKILL.md` 中的核心原则

---

### US-022: 编写产品转型/Pivot 文档
**Description:** 作为创业者，我需要一个框架来决定是否以及如何 pivot。

**Acceptance Criteria:**
- [ ] 创建 `docs/product-strategy/startup-pivoting.md`
- [ ] 分析当前 "Things3 克隆" 策略的可持续性
- [ ] 提供 pivot 决策框架
- [ ] 列出可能的 pivot 方向（AI-first、垂直领域、协作等）
- [ ] 引用 `.claude/skills/startup-pivoting/SKILL.md` 中的核心原则

---

### US-023: 编写 PMF 测量文档
**Description:** 作为创业者，我需要知道 Petal GTD 是否达到了 PMF。

**Acceptance Criteria:**
- [ ] 创建 `docs/product-strategy/measuring-pmf.md`
- [ ] 设计 Sean Ellis 调研问卷
- [ ] 分析当前留存数据（如有）
- [ ] 定义 PMF 的具体里程碑
- [ ] 讨论何时应该开始规模化增长
- [ ] 引用 `.claude/skills/measuring-product-market-fit/SKILL.md` 中的核心原则

---

### US-024: 创建索引文件
**Description:** 作为开发者，我需要一个索引文件来快速导航所有文档。

**Acceptance Criteria:**
- [ ] 创建 `docs/README.md`
- [ ] 按分类列出所有 21 个文档
- [ ] 提供每个文档的一句话描述
- [ ] 添加建议的阅读顺序
- [ ] 说明文档与 `.claude/skills` 的对应关系

## Functional Requirements

- FR-1: 所有文档使用 Markdown 格式
- FR-2: 所有文档使用中文撰写
- FR-3: 每个文档必须包含：概述、核心分析、Petal GTD 应用、行动建议、参考技能
- FR-4: 每个文档开头注明对应的 `.claude/skills` 技能路径
- FR-5: 文档命名使用 kebab-case（如 `north-star-metrics.md`）
- FR-6: 索引文件提供清晰的分类和导航

## Non-Goals

- 不翻译 guest-insights.md 的完整内容
- 不创建复杂的文档网站（仅使用 Markdown）
- 不包含代码实现细节
- 不涉及技术架构文档（这属于工程文档范畴）
- 不创建 MDX 或交互式文档

## Technical Considerations

- 文档存放在 `docs/` 目录下
- 使用相对链接进行文档间引用
- 确保 Markdown 格式兼容 GitHub 渲染
- 文件大小控制在合理范围（每篇 1000-2000 字）

## Design Considerations

### 文档结构模板

每个文档应遵循以下结构：

```markdown
# [技能名称] - Petal GTD 应用分析

> 对应技能：`.claude/skills/[skill-name]/SKILL.md`

## 概述

简要说明这个技能/方法论是什么，为什么对 Petal GTD 重要。

## 核心原则

从 SKILL.md 中提取 3-5 个最相关的核心原则，用中文解释。

## Petal GTD 现状分析

用这个技能的视角分析 Petal GTD 当前的状态。

## 关键洞察

基于分析得出的关键发现和洞察。

## 行动建议

具体的、可执行的下一步行动。

## 思考问题

留下 2-3 个开放性问题供持续思考。

## 参考资料

- 对应技能文件路径
- 相关文档链接
```

### 目录结构

```
docs/
├── README.md                           # 索引文件
├── product-strategy/                   # 产品战略类（10 篇）
│   ├── north-star-metrics.md          # US-002
│   ├── product-vision.md              # US-003
│   ├── roadmap-prioritization.md      # US-004
│   ├── okrs-and-goals.md              # US-005
│   ├── competitive-analysis.md        # US-006
│   ├── working-backwards.md           # US-011
│   ├── product-taste.md               # US-018
│   ├── behavioral-design.md           # US-020
│   ├── startup-ideation.md            # US-021
│   ├── startup-pivoting.md            # US-022
│   └── measuring-pmf.md               # US-023
├── user-research/                      # 用户研究类（5 篇）
│   ├── problem-definition.md          # US-008
│   ├── user-interviews.md             # US-012
│   ├── survey-design.md               # US-013
│   ├── feedback-analysis.md           # US-014
│   └── usability-testing.md           # US-015
└── execution/                          # 执行落地类（5 篇）
    ├── writing-prds.md                # US-007
    ├── specs-and-designs.md           # US-009
    ├── scoping-and-cutting.md         # US-010
    ├── shipping-products.md           # US-016
    ├── timeline-management.md         # US-017
    └── product-operations.md          # US-019
```

## Success Metrics

- 创建 21 个产品分析文档 + 1 个索引文件
- 每个文档包含针对 Petal GTD 的具体分析和建议
- 文档能够指导产品决策（如 pivot 方向、功能优先级）
- 建立可持续更新的知识库结构

## Open Questions

1. 是否需要为每个文档设定具体的完成顺序/优先级？
2. 文档是否需要版本控制或更新日志？
3. 是否需要将文档发布为公开网站（未来考虑）？
4. 是否需要在文档中嵌入具体的数据分析（需要先有数据基础设施）？

---

## 附录：技能与文档对应表

| # | 技能名称 | 文档路径 | User Story |
|---|---------|---------|------------|
| 1 | writing-north-star-metrics | product-strategy/north-star-metrics.md | US-002 |
| 2 | defining-product-vision | product-strategy/product-vision.md | US-003 |
| 3 | prioritizing-roadmap | product-strategy/roadmap-prioritization.md | US-004 |
| 4 | setting-okrs-goals | product-strategy/okrs-and-goals.md | US-005 |
| 5 | competitive-analysis | product-strategy/competitive-analysis.md | US-006 |
| 6 | writing-prds | execution/writing-prds.md | US-007 |
| 7 | problem-definition | user-research/problem-definition.md | US-008 |
| 8 | writing-specs-designs | execution/specs-and-designs.md | US-009 |
| 9 | scoping-cutting | execution/scoping-and-cutting.md | US-010 |
| 10 | working-backwards | product-strategy/working-backwards.md | US-011 |
| 11 | conducting-user-interviews | user-research/user-interviews.md | US-012 |
| 12 | designing-surveys | user-research/survey-design.md | US-013 |
| 13 | analyzing-user-feedback | user-research/feedback-analysis.md | US-014 |
| 14 | usability-testing | user-research/usability-testing.md | US-015 |
| 15 | shipping-products | execution/shipping-products.md | US-016 |
| 16 | managing-timelines | execution/timeline-management.md | US-017 |
| 17 | product-taste-intuition | product-strategy/product-taste.md | US-018 |
| 18 | product-operations | execution/product-operations.md | US-019 |
| 19 | behavioral-product-design | product-strategy/behavioral-design.md | US-020 |
| 20 | startup-ideation | product-strategy/startup-ideation.md | US-021 |
| 21 | startup-pivoting | product-strategy/startup-pivoting.md | US-022 |
| 22 | measuring-product-market-fit | product-strategy/measuring-pmf.md | US-023 |
