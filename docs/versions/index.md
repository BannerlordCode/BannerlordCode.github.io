---
title: 跨版本类对比 / Cross-Version Class Comparison
sidebar: auto
---

# 跨版本类对比 / Cross-Version Class Comparison

本模块逐类比较同一类型在 **1.3.0 → 1.3.15 → 1.4.5** 的可访问 API 变化（public/protected/internal），从源码自动提取，并标注对 modder 的实际影响。这是版本迁移与兼容性判断的权威参考。

This module compares, class by class, how the same type's accessible API (public/protected/internal) changes across **1.3.0 → 1.3.15 → 1.4.5**, extracted from source and annotated with real modder impact. It is the authoritative reference for version migration and compatibility.

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
