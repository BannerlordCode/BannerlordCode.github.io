<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OneHanded`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# OneHanded

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class OneHanded`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## 概述

`OneHanded` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `WrappedHandles` | `public static PerkObject WrappedHandles { get; }` |
| `Basher` | `public static PerkObject Basher { get; }` |
| `ToBeBlunt` | `public static PerkObject ToBeBlunt { get; }` |
| `SwiftStrike` | `public static PerkObject SwiftStrike { get; }` |
| `Cavalry` | `public static PerkObject Cavalry { get; }` |
| `ShieldBearer` | `public static PerkObject ShieldBearer { get; }` |
| `Trainer` | `public static PerkObject Trainer { get; }` |
| `Duelist` | `public static PerkObject Duelist { get; }` |
| `ShieldWall` | `public static PerkObject ShieldWall { get; }` |
| `ArrowCatcher` | `public static PerkObject ArrowCatcher { get; }` |
| `MilitaryTradition` | `public static PerkObject MilitaryTradition { get; }` |
| `CorpsACorps` | `public static PerkObject CorpsACorps { get; }` |
| `StandUnited` | `public static PerkObject StandUnited { get; }` |
| `LeadByExample` | `public static PerkObject LeadByExample { get; }` |
| `SteelCoreShields` | `public static PerkObject SteelCoreShields { get; }` |
| `FleetOfFoot` | `public static PerkObject FleetOfFoot { get; }` |
| `DeadlyPurpose` | `public static PerkObject DeadlyPurpose { get; }` |
| `UnwaveringDefense` | `public static PerkObject UnwaveringDefense { get; }` |
| `Prestige` | `public static PerkObject Prestige { get; }` |
| `WayOfTheSword` | `public static PerkObject WayOfTheSword { get; }` |
| `ChinkInTheArmor` | `public static PerkObject ChinkInTheArmor { get; }` |

## 使用示例

```csharp
var example = new OneHanded();
```

## 参见

- [完整类目录](../catalog)