<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WorkshopType`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WorkshopType

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Workshops
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class WorkshopType : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Workshops/WorkshopType.cs`

## 概述

`WorkshopType` 位于 `TaleWorlds.CampaignSystem.Settlements.Workshops`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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

## 主要方法

### Production
`public struct Production(float conversionSpeed)`

**用途 / Purpose:** 处理 `production` 相关逻辑。

### AddInput
`public void AddInput(ItemCategory item, int count = 1)`

**用途 / Purpose:** 向当前集合/状态中添加 `input`。

### AddOutput
`public void AddOutput(ItemCategory outputCategory, int outputCount)`

**用途 / Purpose:** 向当前集合/状态中添加 `output`。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

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

## 使用示例

```csharp
var value = new WorkshopType();
value.Production(0);
```

## 参见

- [完整类目录](../catalog)