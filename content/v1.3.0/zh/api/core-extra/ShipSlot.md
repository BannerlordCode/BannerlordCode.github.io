---
title: "ShipSlot"
description: "ShipSlot 的自动生成类参考。"
---
# ShipSlot

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class ShipSlot : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/ShipSlot.cs`

## 概述

`ShipSlot` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TypeId` | `public string TypeId { get; }` |
| `MainPrefabId` | `public string MainPrefabId { get; }` |
| `MatchingPieces` | `public MBReadOnlyList<ShipUpgradePiece> MatchingPieces { get; }` |

## 主要方法

### AfterRegister
`public override void AfterRegister()`

**用途 / Purpose:** 在 「register」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ShipSlot 实例
ShipSlot shipSlot = ...;
shipSlot.AfterRegister();
```

### AddMatchingPiece
`public void AddMatchingPiece(ShipUpgradePiece upgradePiece)`

**用途 / Purpose:** 将 「matching piece」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ShipSlot 实例
ShipSlot shipSlot = ...;
shipSlot.AddMatchingPiece(upgradePiece);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 ShipSlot 实例
ShipSlot shipSlot = ...;
shipSlot.Deserialize(objectManager, node);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ShipSlot shipSlot = ...;
shipSlot.AfterRegister();
```

## 参见

- [本区域目录](../)