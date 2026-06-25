---
title: "Crossbow"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Crossbow`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Crossbow

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Crossbow`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## 概述

`Crossbow` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Piercer` | `public static PerkObject Piercer { get; }` |
| `Marksmen` | `public static PerkObject Marksmen { get; }` |
| `Unhorser` | `public static PerkObject Unhorser { get; }` |
| `WindWinder` | `public static PerkObject WindWinder { get; }` |
| `DonkeysSwiftness` | `public static PerkObject DonkeysSwiftness { get; }` |
| `Sheriff` | `public static PerkObject Sheriff { get; }` |
| `PeasantLeader` | `public static PerkObject PeasantLeader { get; }` |
| `RenownMarksmen` | `public static PerkObject RenownMarksmen { get; }` |
| `Fletcher` | `public static PerkObject Fletcher { get; }` |
| `Puncture` | `public static PerkObject Puncture { get; }` |
| `LooseAndMove` | `public static PerkObject LooseAndMove { get; }` |
| `DeftHands` | `public static PerkObject DeftHands { get; }` |
| `CounterFire` | `public static PerkObject CounterFire { get; }` |
| `MountedCrossbowman` | `public static PerkObject MountedCrossbowman { get; }` |
| `Steady` | `public static PerkObject Steady { get; }` |
| `LongShots` | `public static PerkObject LongShots { get; }` |
| `HammerBolts` | `public static PerkObject HammerBolts { get; }` |
| `Pavise` | `public static PerkObject Pavise { get; }` |
| `Terror` | `public static PerkObject Terror { get; }` |
| `PickedShots` | `public static PerkObject PickedShots { get; }` |
| `MightyPull` | `public static PerkObject MightyPull { get; }` |

## 使用示例

```csharp
var example = new Crossbow();
```

## 参见

- [完整类目录](../catalog)