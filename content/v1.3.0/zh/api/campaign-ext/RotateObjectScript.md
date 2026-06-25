---
title: "RotateObjectScript"
description: "RotateObjectScript 的自动生成类参考。"
---
# RotateObjectScript

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class RotateObjectScript : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `SandBox/Missions/RotateObjectScript.cs`

## 概述

`RotateObjectScript` 位于 `SandBox.Missions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Missions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 读取并返回当前对象中 tick requirement 的结果。

```csharp
// 先通过子系统 API 拿到 RotateObjectScript 实例
RotateObjectScript rotateObjectScript = ...;
var result = rotateObjectScript.GetTickRequirement();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RotateObjectScript rotateObjectScript = ...;
rotateObjectScript.GetTickRequirement();
```

## 参见

- [本区域目录](../)