---
title: "PlayerIdExtensions"
description: "PlayerIdExtensions 的自动生成类参考。"
---
# PlayerIdExtensions

**Namespace:** TaleWorlds.PlayerServices
**Module:** TaleWorlds.PlayerServices
**Type:** `public static class PlayerIdExtensions`
**Base:** 无
**File:** `TaleWorlds.PlayerServices/PlayerServices/PlayerIdExtensions.cs`

## 概述

`PlayerIdExtensions` 位于 `TaleWorlds.PlayerServices`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.PlayerServices` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SupportsPlayerCard
`public static bool SupportsPlayerCard(this PlayerIdProvidedTypes type)`

**用途 / Purpose:** 调用 SupportsPlayerCard 对应的操作。

```csharp
// 静态调用，不需要实例
PlayerIdExtensions.SupportsPlayerCard(type);
```

## 使用示例

```csharp
PlayerIdExtensions.SupportsPlayerCard(type);
```

## 参见

- [本区域目录](../)