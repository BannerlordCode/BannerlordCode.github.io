---
title: "ShipSlotAndPieceName"
description: "ShipSlotAndPieceName 的自动生成类参考。"
---
# ShipSlotAndPieceName

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct ShipSlotAndPieceName`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ShipSlotAndPieceName.cs`

## 概述

`ShipSlotAndPieceName` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ShipSlotAndPieceName
`public struct ShipSlotAndPieceName(string slotName, string pieceName)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ShipSlotAndPieceName 对应的操作。

```csharp
// 先通过子系统 API 拿到 ShipSlotAndPieceName 实例
ShipSlotAndPieceName shipSlotAndPieceName = ...;
var result = shipSlotAndPieceName.ShipSlotAndPieceName("example", "example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ShipSlotAndPieceName shipSlotAndPieceName = ...;
shipSlotAndPieceName.ShipSlotAndPieceName("example", "example");
```

## 参见

- [本区域目录](../)