<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultItems`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultItems

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultItems`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/DefaultItems.cs`

## 概述

`DefaultItems` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Grain` | `public static ItemObject Grain { get; }` |
| `Planks` | `public static ItemObject Planks { get; }` |
| `Felt` | `public static ItemObject Felt { get; }` |
| `Meat` | `public static ItemObject Meat { get; }` |
| `Hides` | `public static ItemObject Hides { get; }` |
| `Tools` | `public static ItemObject Tools { get; }` |
| `IronOre` | `public static ItemObject IronOre { get; }` |
| `HardWood` | `public static ItemObject HardWood { get; }` |
| `Charcoal` | `public static ItemObject Charcoal { get; }` |
| `IronIngot1` | `public static ItemObject IronIngot1 { get; }` |
| `IronIngot2` | `public static ItemObject IronIngot2 { get; }` |
| `IronIngot3` | `public static ItemObject IronIngot3 { get; }` |
| `IronIngot4` | `public static ItemObject IronIngot4 { get; }` |
| `IronIngot5` | `public static ItemObject IronIngot5 { get; }` |
| `IronIngot6` | `public static ItemObject IronIngot6 { get; }` |
| `Trash` | `public static ItemObject Trash { get; }` |

## 使用示例

```csharp
var value = new DefaultItems();
```

## 参见

- [完整类目录](../catalog)