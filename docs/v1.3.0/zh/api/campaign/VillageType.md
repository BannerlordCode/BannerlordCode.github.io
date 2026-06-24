<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VillageType`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# VillageType

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class VillageType : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Settlements/VillageType.cs`

## 概述

`VillageType` 位于 `TaleWorlds.CampaignSystem.Settlements`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `All` | `public static MBReadOnlyList<VillageType> All { get; }` |
| `Productions` | `public MBReadOnlyList<ValueTuple<ItemObject, float>> Productions { get; }` |
| `PrimaryProduction` | `public ItemObject PrimaryProduction { get; }` |

## 主要方法

### Initialize
`public VillageType Initialize(TextObject shortName, string meshName, string meshNameUnderConstruction, string meshNameBurned, ValueTuple<ItemObject, float> productions)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### AddProductions
`public void AddProductions(IEnumerable<ValueTuple<ItemObject, float>> productions)`

**用途 / Purpose:** 向当前集合/状态中添加 `productions`。

### GetProductionPerDay
`public float GetProductionPerDay(ItemObject item)`

**用途 / Purpose:** 获取 `production per day` 的当前值。

### GetProductionPerDay
`public float GetProductionPerDay(ItemCategory itemCategory)`

**用途 / Purpose:** 获取 `production per day` 的当前值。

## 使用示例

```csharp
var value = new VillageType();
value.Initialize(shortName, "example", "example", "example", valueTuple<ItemObject, 0);
```

## 参见

- [完整类目录](../catalog)