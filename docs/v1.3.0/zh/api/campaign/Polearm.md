<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Polearm`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Polearm

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Polearm`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## 概述

`Polearm` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Pikeman` | `public static PerkObject Pikeman { get; }` |
| `Cavalry` | `public static PerkObject Cavalry { get; }` |
| `Braced` | `public static PerkObject Braced { get; }` |
| `KeepAtBay` | `public static PerkObject KeepAtBay { get; }` |
| `SwiftSwing` | `public static PerkObject SwiftSwing { get; }` |
| `CleanThrust` | `public static PerkObject CleanThrust { get; }` |
| `Footwork` | `public static PerkObject Footwork { get; }` |
| `HardKnock` | `public static PerkObject HardKnock { get; }` |
| `SteedKiller` | `public static PerkObject SteedKiller { get; }` |
| `Lancer` | `public static PerkObject Lancer { get; }` |
| `Skewer` | `public static PerkObject Skewer { get; }` |
| `Guards` | `public static PerkObject Guards { get; }` |
| `StandardBearer` | `public static PerkObject StandardBearer { get; }` |
| `Phalanx` | `public static PerkObject Phalanx { get; }` |
| `HardyFrontline` | `public static PerkObject HardyFrontline { get; }` |
| `Drills` | `public static PerkObject Drills { get; }` |
| `SureFooted` | `public static PerkObject SureFooted { get; }` |
| `UnstoppableForce` | `public static PerkObject UnstoppableForce { get; }` |
| `CounterWeight` | `public static PerkObject CounterWeight { get; }` |
| `SharpenTheTip` | `public static PerkObject SharpenTheTip { get; }` |
| `WayOfTheSpear` | `public static PerkObject WayOfTheSpear { get; }` |

## 使用示例

```csharp
var example = new Polearm();
```

## 参见

- [完整类目录](../catalog)