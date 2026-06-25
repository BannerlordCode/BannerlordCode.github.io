---
title: "PlayerIdExtensions"
description: "PlayerIdExtensions 的自动生成类参考。"
---
# PlayerIdExtensions

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public static class PlayerIdExtensions`
**Base:** 无
**File:** `TaleWorlds.Diamond/PlayerIdExtensions.cs`

## 概述

`PlayerIdExtensions` 位于 `TaleWorlds.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ConvertToPeerId
`public static PeerId ConvertToPeerId(this PlayerId playerId)`

**用途 / Purpose:** **用途 / Purpose:** 把to peer id转换为另一种表示或类型。

```csharp
// 静态调用，不需要实例
PlayerIdExtensions.ConvertToPeerId(playerId);
```

### ConvertToPlayerId
`public static PlayerId ConvertToPlayerId(this PeerId peerId)`

**用途 / Purpose:** **用途 / Purpose:** 把to player id转换为另一种表示或类型。

```csharp
// 静态调用，不需要实例
PlayerIdExtensions.ConvertToPlayerId(peerId);
```

## 使用示例

```csharp
PlayerIdExtensions.ConvertToPeerId(playerId);
```

## 参见

- [本区域目录](../)