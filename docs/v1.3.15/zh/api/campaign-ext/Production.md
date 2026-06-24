<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Production`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Production

**命名空间:** TaleWorlds.CampaignSystem.Settlements.Workshops
**模块:** TaleWorlds.CampaignSystem
**类型:** `public struct Production`
**领域:** campaign-ext

## 概述

`Production` 位于 `TaleWorlds.CampaignSystem.Settlements.Workshops`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements.Workshops` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `EquipmentCost` | `public int EquipmentCost { get; }` |
| `Frequency` | `public int Frequency { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `JobName` | `public TextObject JobName { get; }` |
| `IsHidden` | `public bool IsHidden { get; }` |
| `SignMeshName` | `public string SignMeshName { get; }` |
| `PropMeshName1` | `public string PropMeshName1 { get; }` |
| `PropMeshName2` | `public string PropMeshName2 { get; }` |
| `PropMeshName3List` | `public List<string> PropMeshName3List { get; }` |
| `PropMeshName4` | `public string PropMeshName4 { get; }` |
| `PropMeshName5` | `public string PropMeshName5 { get; }` |
| `PropMeshName6` | `public string PropMeshName6 { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `Productions` | `public MBReadOnlyList<WorkshopType.Production> Productions { get; }` |
| `All` | `public static MBReadOnlyList<WorkshopType> All { get; }` |
| `Inputs` | `public MBReadOnlyList<ValueTuple<ItemCategory, int>> Inputs { get; }` |
| `Outputs` | `public MBReadOnlyList<ValueTuple<ItemCategory, int>> Outputs { get; }` |
| `ConversionSpeed` | `public float ConversionSpeed { get; }` |

## 主要方法

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### Initialize
`public override void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### Find
`public static WorkshopType Find(string idString)`

**用途 / Purpose:** 处理 `find` 相关逻辑。

### FindFirst
`public static WorkshopType FindFirst(Func<WorkshopType, bool> predicate)`

**用途 / Purpose:** 处理 `find first` 相关逻辑。

### AddInput
`public void AddInput(ItemCategory item, int count = 1)`

**用途 / Purpose:** 向当前集合/状态中添加 `input`。

### AddOutput
`public void AddOutput(ItemCategory outputCategory, int outputCount)`

**用途 / Purpose:** 向当前集合/状态中添加 `output`。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 Production 实例，再调用它的公开方法
var value = new Production();
value.GetName();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
