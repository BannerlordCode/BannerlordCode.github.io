---
title: "WorkshopType"
description: "WorkshopType 的自动生成类参考。"
---
# WorkshopType

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Workshops
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class WorkshopType : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Workshops/WorkshopType.cs`

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

**用途 / Purpose:** 处理与 「production」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 WorkshopType 实例
WorkshopType workshopType = ...;
var result = workshopType.Production(0);
```

### AddInput
`public void AddInput(ItemCategory item, int count = 1)`

**用途 / Purpose:** 将 「input」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 WorkshopType 实例
WorkshopType workshopType = ...;
workshopType.AddInput(item, 0);
```

### AddOutput
`public void AddOutput(ItemCategory outputCategory, int outputCount)`

**用途 / Purpose:** 将 「output」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 WorkshopType 实例
WorkshopType workshopType = ...;
workshopType.AddOutput(outputCategory, 0);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 WorkshopType 实例
WorkshopType workshopType = ...;
var result = workshopType.ToString();
```

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 读取并返回当前对象中 「name」 的结果。

```csharp
// 先通过子系统 API 拿到 WorkshopType 实例
WorkshopType workshopType = ...;
var result = workshopType.GetName();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 WorkshopType 实例
WorkshopType workshopType = ...;
var result = workshopType.ToString();
```

### Initialize
`public override void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 WorkshopType 实例
WorkshopType workshopType = ...;
workshopType.Initialize();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 WorkshopType 实例
WorkshopType workshopType = ...;
workshopType.Deserialize(objectManager, node);
```

### Find
`public static WorkshopType Find(string idString)`

**用途 / Purpose:** 在当前集合/范围内查找匹配项。

```csharp
// 静态调用，不需要实例
WorkshopType.Find("example");
```

### FindFirst
`public static WorkshopType FindFirst(Func<WorkshopType, bool> predicate)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「first」。

```csharp
// 静态调用，不需要实例
WorkshopType.FindFirst(func<WorkshopType, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WorkshopType workshopType = ...;
workshopType.Production(0);
```

## 参见

- [本区域目录](../)