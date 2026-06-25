---
title: "TradeItemComponent"
description: "TradeItemComponent 的自动生成类参考。"
---
# TradeItemComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class TradeItemComponent : ItemComponent`
**Base:** `ItemComponent`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/TradeItemComponent.cs`

## 概述

`TradeItemComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `TradeItemComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MoraleBonus` | `public int MoraleBonus { get; }` |

## 主要方法

### GetCopy
`public override ItemComponent GetCopy()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 copy 的结果。

```csharp
// 先通过子系统 API 拿到 TradeItemComponent 实例
TradeItemComponent tradeItemComponent = ...;
var result = tradeItemComponent.GetCopy();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** **用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 TradeItemComponent 实例
TradeItemComponent tradeItemComponent = ...;
tradeItemComponent.Deserialize(objectManager, node);
```

## 使用示例

```csharp
var component = agent.GetComponent<TradeItemComponent>();
```

## 参见

- [本区域目录](../)