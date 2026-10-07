---
title: 跨版本类对比 / Cross-Version Class Comparison
description: Per-class API deltas across Bannerlord 1.3.0, 1.3.15, and 1.4.5
extra:
  sidebar: auto
---
# 跨版本类对比 / Cross-Version Class Comparison

## 这里查什么、不该查什么

分工会了就不走错路：

| 你想知道 | 去哪 |
| --- | --- |
| 同一个类在 1.3.0 / 1.3.15 / 1.4.5 之间**成员级**的增删 | **本页下面的类索引表** —— 逐类、逐成员 |
| 模块级 / 桶结构级的版本差异 | 那个版本自己的 `architecture/version-delta` |
| 1.4.5 → 1.5.3 删了什么、签名变了什么 | [从 1.4.5 迁移到 1.5.3](../v1.5.3/zh/architecture/migration-from-1.4.5) |

> **不要靠「两个版本树并排读」来比较。** 一棵版本树是**某一版的真相**，不是两版的对比。
> 而且桶名集合逐版不同，按直觉去对面树里找同名路径大概率扑空。

## 六个版本的关系

```text
   v1.3.0 ──→ v1.3.15 ──→ v1.4.5 ──→ v1.4.6 ──→ v1.4.7 ──→ v1.5.3
   历史       稳定基线      对标最全    增量        增量       源码最完整
   └──────────── 本页覆盖范围 ────────────┘
   └────────── 逐类对比只到 v1.4.5 为止 ──────────┘
```

- **本页只覆盖 1.3.0 / 1.3.15 / 1.4.5 三版。** 不是漏了：生成器
  `tools/class-version-diff.mjs` 的源码根写死为这三棵，所以想比较 1.4.7 与 1.5.3
  **在这个工具下不可能**，只能读目标版本自己的迁移页。
- **v1.3.15 是稳定基线**，v1.4.5 是 API 树最大的一版，
  v1.4.6 / v1.4.7 / v1.5.3 是增量分支。选哪一版见 [站点首页](../)。

## 按「我要做的事」进入

本页不只是类对比的清单，也是任务的入口。每个任务页给的是**下钻路径**与**心智模型**，
不是签名表 —— 签名表在类页。

| 我要做的事 | 从这页进 |
| --- | --- |
| 让 mod 被加载、拿到注册器 | [让 mod 被加载](./task-mod-bootstrap) |
| 做一个玩家可触发的战役动作 | [做一个新的战役动作](./task-campaign-action) |
| 在战斗场景里做事 | [处理一场战斗（Mission 侧）](./task-mission-action) |
| 替换游戏默认的算法 | [接一个 GameModel](./task-gamemodel) |
| 给战役挂一段常驻逻辑 | [加一个 CampaignBehavior](./task-campaign-behavior) |
| 让自定义数据存进存档 | [读写存档](./task-save) |
| 加一个界面 | [挂一个 UI 面板](./task-ui-screen) |
| 改地图或战斗的 AI 决策 | [改 AI 决策](./task-ai) |
| 让 mod 在网络上说话 | [加一条网络消息](./task-network) |

## 类索引 / Class index

| 类 Class | 1.3.15 成员 | 1.4.5 成员 | 1.3.15→1.4.5 变化 Change |
|------|------|------|------|
| [`Hero`](./Hero) | 233 | 235 | 1.4.5: +2/-0 |
| [`MobileParty`](./MobileParty) | 299 | 308 | 1.4.5: +11/-2 |
| [`Clan`](./Clan) | 156 | 156 | 1.4.5: +1/-1 |
| [`Kingdom`](./Kingdom) | 122 | 120 | 1.4.5: +1/-3 |
| [`Settlement`](./Settlement) | 141 | 140 | 1.4.5: +1/-2 |
| [`Town`](./Town) | 80 | 80 | 1.4.5: 无变化 stable |
| [`Village`](./Village) | 34 | 34 | 1.4.5: 无变化 stable |
| [`ItemObject`](./ItemObject) | 81 | 81 | 1.4.5: 无变化 stable |
| [`IssueBase`](./IssueBase) | 136 | 135 | 1.4.5: +0/-1 |
| [`QuestBase`](./QuestBase) | 77 | 77 | 1.4.5: 无变化 stable |
| [`DiplomacyModel`](./DiplomacyModel) | 63 | 62 | 1.4.5: +1/-2 |
| [`KingdomManager`](./KingdomManager) | 16 | 13 | 1.4.5: +0/-3 |
| [`HeroDeveloper`](./HeroDeveloper) | 39 | 41 | 1.4.5: +2/-0 |
| [`CampaignBehaviorBase`](./CampaignBehaviorBase) | 2 | 2 | 1.4.5: 无变化 stable |
| [`Agent`](./Agent) | 508 | 514 | 1.4.5: +7/-1 |
| [`Mission`](./Mission) | 386 | 387 | 1.4.5: +4/-3 |
| [`Formation`](./Formation) | 183 | 183 | 1.4.5: +2/-2 |
| [`MissionBehavior`](./MissionBehavior) | 61 | 61 | 1.4.5: 无变化 stable |


## 怎么读这些表

- **新增 Added**：新版本里出现、旧版本没有的成员。升级 mod 时可选用。
- **移除 Removed**：旧版本有、新版本删掉的成员。升级时必须迁移或替换，否则编译失败。
- **无变化 stable**：两版可访问成员一致。**不等于行为没变** —— 只说明签名没变。
- 1.4.5 源码为反编译产物，个别成员的修饰符/签名可能与原始源码略有出入；以签名表为准，遇疑查源文件。

**「移除」是升级时唯一必须动手的一类。** 先扫自己用到的类在表里有没有「移除」行，再动手改；「新增」是机会不是义务。

## 1.4.6 / 1.4.7 / 1.5.3 的差异去哪查

这三版**不在本页覆盖范围内**（生成器只认三棵源码树）。去它们各自的页：

| 版本 | 差异页 | 讲什么 |
| --- | --- | --- |
| v1.4.6 | [版本差异](../v1.4.6/zh/architecture/version-delta/) | 模块与覆盖状态 |
| v1.4.7 | [版本差异（1.4.7 vs 1.4.5 vs 1.3.15）](../v1.4.7/zh/architecture/version-delta) | 消失的类型清单、桶结构重划 |
| v1.5.3 | [从 1.4.5 迁移到 1.5.3](../v1.5.3/zh/architecture/migration-from-1.4.5) | 58 个真删除 + 核心方法签名变化 |

## 没被收录的类怎么办

本页只有 18 个精选类。**没出现不等于「无变化」，只等于「未进入精选对比」。**

```bash
# 在仓库根目录（bannerlord-* 源码树的父目录）下
node BannerlordCode.github.io/tools/class-version-diff.mjs ClassName
```

该工具打印该类在 1.3.0 / 1.3.15 / 1.4.5 三棵源码树上的可访问成员差异。它的源码根写死为这三棵，所以查不了 1.4.6+ —— 那三版请读各自的迁移页。

## 重新生成 / Regenerate

```bash
# 在仓库根目录 / from repo root
node BannerlordCode.github.io/tools/class-version-diff.mjs ClassName   # 单类打印 / print one class
node BannerlordCode.github.io/tools/gen-version-pages.mjs             # 重新生成全部页面 / regenerate all pages
```

## 使用方式 / How to Use

1. 先判断你要的是**成员级**差异（本页）还是**模块级**差异（各版本的 version-delta）。
2. 成员级就在上面的类索引表里挑一个高影响类，点进去看变更摘要。
3. 再从类页跳回该类在各个版本的实际文档页。
4. 类不在 18 个之列，就自己跑上面的命令 —— 别把它当成「无变化」。

## 导航

- ↑ [站点首页](../)
- ↔ [六个版本怎么选](../) · [按「我要做的事」进入](#按我要做的事进入)

<!-- BEGIN SECTION INDEX -->
> 共 27 个子页

## 类对比页面索引 / Class Comparison Index — Alphabetical

### A

- [Agent 跨版本对比 / Cross-Version Comparison](./Agent)

### C

- [CampaignBehaviorBase 跨版本对比 / Cross-Version Comparison](./CampaignBehaviorBase)
- [Clan 跨版本对比 / Cross-Version Comparison](./Clan)

### D

- [DiplomacyModel 跨版本对比 / Cross-Version Comparison](./DiplomacyModel)

### F

- [Formation 跨版本对比 / Cross-Version Comparison](./Formation)

### H

- [Hero 跨版本对比 / Cross-Version Comparison](./Hero)
- [HeroDeveloper 跨版本对比 / Cross-Version Comparison](./HeroDeveloper)

### I

- [IssueBase 跨版本对比 / Cross-Version Comparison](./IssueBase)
- [ItemObject 跨版本对比 / Cross-Version Comparison](./ItemObject)

### K

- [Kingdom 跨版本对比 / Cross-Version Comparison](./Kingdom)
- [KingdomManager 跨版本对比 / Cross-Version Comparison](./KingdomManager)

### M

- [Mission 跨版本对比 / Cross-Version Comparison](./Mission)
- [MissionBehavior 跨版本对比 / Cross-Version Comparison](./MissionBehavior)
- [MobileParty 跨版本对比 / Cross-Version Comparison](./MobileParty)

### Q

- [QuestBase 跨版本对比 / Cross-Version Comparison](./QuestBase)

### S

- [Settlement 跨版本对比 / Cross-Version Comparison](./Settlement)

### T

- [Town 跨版本对比 / Cross-Version Comparison](./Town)

### V

- [Village 跨版本对比 / Cross-Version Comparison](./Village)


- [task-ai](./task-ai)
- [task-campaign-action](./task-campaign-action)
- [task-campaign-behavior](./task-campaign-behavior)
- [task-gamemodel](./task-gamemodel)
- [task-mission-action](./task-mission-action)
- [task-mod-bootstrap](./task-mod-bootstrap)
- [task-network](./task-network)
- [task-save](./task-save)
- [task-ui-screen](./task-ui-screen)
<!-- END SECTION INDEX -->
