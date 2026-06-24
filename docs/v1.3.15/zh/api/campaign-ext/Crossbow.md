<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Crossbow`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Crossbow

**命名空间:** TaleWorlds.CampaignSystem.CharacterDevelopment
**模块:** TaleWorlds.CampaignSystem
**类型:** `public static class Crossbow`
**领域:** campaign-ext

## 概述

`Crossbow` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

## 使用示例

```csharp
var value = new Crossbow();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
