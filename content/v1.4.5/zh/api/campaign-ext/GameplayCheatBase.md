---
title: "GameplayCheatBase"
description: "GameplayCheatBase 的自动生成类参考。"
---
# GameplayCheatBase

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public abstract class GameplayCheatBase`
**Base:** 无
**File:** `Modules.SandBox/SandBox/Sandbox/GameplayCheatBase.cs`

## 概述

`GameplayCheatBase` 位于 `SandBox`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetName
`public abstract TextObject GetName()`

**用途 / Purpose:** 读取并返回当前对象中 「name」 的结果。

```csharp
// 先通过子系统 API 拿到 GameplayCheatBase 实例
GameplayCheatBase gameplayCheatBase = ...;
var result = gameplayCheatBase.GetName();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
GameplayCheatBase instance = ...;
```

## 参见

- [本区域目录](../)