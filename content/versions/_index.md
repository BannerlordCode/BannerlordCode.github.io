---
title: 跨版本类对比 / Cross-Version Class Comparison
description: Per-class API deltas across Bannerlord 1.3.0, 1.3.15, and 1.4.5
extra:
  sidebar: auto
---
# 跨版本类对比 / Cross-Version Class Comparison

## Mental Model

Treat `跨版本类对比` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

本模块当前提供 **精选类** 的跨版本对比：它聚焦于迁移影响最大、最常见、最值得模组作者优先检查的类型，并展示这些类型在 **1.3.0 → 1.3.15 → 1.4.5** 之间的可访问 API 变化（public/protected/internal）。

This module currently provides a **curated set of class comparisons**. It focuses on the types most likely to matter during migration work, and shows how their accessible API (public/protected/internal) changes across **1.3.0 → 1.3.15 → 1.4.5**.

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

## 如何阅读 / How to read

- **新增 Added**：新版本里出现、旧版本没有的成员。升级 mod 时可选用。
- **移除 Removed**：旧版本有、新版本删掉的成员。升级时必须迁移或替换，否则编译失败。
- 1.4.5 源码为反编译产物，个别成员的修饰符/签名可能与原始源码略有出入；以签名表为准，遇疑查源文件。

- **Added**: members present in the newer version but not the older. Optional to adopt when upgrading.
- **Removed**: members present in the older version but deleted in the newer. You must migrate or replace them when upgrading, or compilation fails.
- The 1.4.5 source is decompiled; some modifiers/signatures may differ slightly from the original. Trust the signature tables; consult the source file when in doubt.

## 重新生成 / Regenerate

```bash
# 在仓库根目录 / from repo root
node BannerlordCode.github.io/tools/class-version-diff.mjs ClassName   # 单类打印 / print one class
node BannerlordCode.github.io/tools/gen-version-pages.mjs             # 重新生成全部页面 / regenerate all pages
```

## 使用方式 / How to Use

1. 先从这里选择一个高影响类。
2. 阅读变更摘要，再跳回该类在各版本的实际文档页。
3. 如果某个类型尚未出现在本列表中，就把它视为“未进入精选对比”，而不是“无变化”。

<!-- BEGIN SECTION INDEX -->

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


<!-- END SECTION INDEX -->
