---
title: "TooltipProperty"
description: "TooltipProperty 的自动生成类参考。"
---
# TooltipProperty

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class TooltipProperty : ViewModel, ISerializableObject`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Information/TooltipProperty.cs`

## 概述

`TooltipProperty` 位于 `TaleWorlds.Core.ViewModelCollection.Information`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection.Information` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OnlyShowWhenExtended` | `public bool OnlyShowWhenExtended { get; set; }` |
| `OnlyShowWhenNotExtended` | `public bool OnlyShowWhenNotExtended { get; set; }` |
| `TextHeight` | `public int TextHeight { get; set; }` |
| `TextColor` | `public Color TextColor { get; set; }` |
| `DefinitionLabel` | `public string DefinitionLabel { get; set; }` |
| `ValueLabel` | `public string ValueLabel { get; set; }` |
| `PropertyModifier` | `public int PropertyModifier { get; set; }` |

## 主要方法

### RefreshValue
`public void RefreshValue()`

**用途 / Purpose:** 使 value 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 TooltipProperty 实例
TooltipProperty tooltipProperty = ...;
tooltipProperty.RefreshValue();
```

### RefreshDefinition
`public void RefreshDefinition()`

**用途 / Purpose:** 使 definition 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 TooltipProperty 实例
TooltipProperty tooltipProperty = ...;
tooltipProperty.RefreshDefinition();
```

### DeserializeFrom
`public void DeserializeFrom(IReader reader)`

**用途 / Purpose:** 从序列化数据还原出from。

```csharp
// 先通过子系统 API 拿到 TooltipProperty 实例
TooltipProperty tooltipProperty = ...;
tooltipProperty.DeserializeFrom(reader);
```

### SerializeTo
`public void SerializeTo(IWriter writer)`

**用途 / Purpose:** 将to序列化为可存储或传输的格式。

```csharp
// 先通过子系统 API 拿到 TooltipProperty 实例
TooltipProperty tooltipProperty = ...;
tooltipProperty.SerializeTo(writer);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TooltipProperty tooltipProperty = ...;
tooltipProperty.RefreshValue();
```

## 参见

- [本区域目录](../)