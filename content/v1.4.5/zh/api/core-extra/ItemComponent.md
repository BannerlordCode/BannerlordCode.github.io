---
title: "ItemComponent"
description: "ItemComponent 的自动生成类参考。"
---
# ItemComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class ItemComponent : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/ItemComponent.cs`

## 概述

`ItemComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `ItemComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Item` | `public ItemObject Item { get; set; }` |
| `ItemModifierGroup` | `public ItemModifierGroup ItemModifierGroup { get; set; }` |

## 主要方法

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 ItemComponent 实例
ItemComponent itemComponent = ...;
itemComponent.Deserialize(objectManager, node);
```

### GetCopy
`public abstract ItemComponent GetCopy()`

**用途 / Purpose:** 读取并返回当前对象中 copy 的结果。

```csharp
// 先通过子系统 API 拿到 ItemComponent 实例
ItemComponent itemComponent = ...;
var result = itemComponent.GetCopy();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ItemComponent instance = ...;
```

## 参见

- [本区域目录](../)