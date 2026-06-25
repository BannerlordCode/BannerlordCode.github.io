---
title: "GameplayCheatItem"
description: "GameplayCheatItem 的自动生成类参考。"
---
# GameplayCheatItem

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public abstract class GameplayCheatItem : GameplayCheatBase`
**Base:** `GameplayCheatBase`
**File:** `SandBox/GameplayCheatItem.cs`

## 概述

`GameplayCheatItem` 位于 `SandBox`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ExecuteCheat
`public abstract void ExecuteCheat()`

**用途 / Purpose:** 执行 「cheat」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GameplayCheatItem 实例
GameplayCheatItem gameplayCheatItem = ...;
gameplayCheatItem.ExecuteCheat();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
GameplayCheatItem instance = ...;
```

## 参见

- [本区域目录](../)