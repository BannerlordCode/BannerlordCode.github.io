---
title: "SaveCodeGenerationContext"
description: "SaveCodeGenerationContext 的自动生成类参考。"
---
# SaveCodeGenerationContext

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveCodeGenerationContext`
**Base:** 无
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Definition/SaveCodeGenerationContext.cs`

## 概述

`SaveCodeGenerationContext` 位于 `TaleWorlds.SaveSystem.Definition`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Definition` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddAssembly
`public void AddAssembly(Assembly assembly, string defaultNamespace, string location, string fileName)`

**用途 / Purpose:** 将 assembly 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 SaveCodeGenerationContext 实例
SaveCodeGenerationContext saveCodeGenerationContext = ...;
saveCodeGenerationContext.AddAssembly(assembly, "example", "example", "example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SaveCodeGenerationContext saveCodeGenerationContext = ...;
saveCodeGenerationContext.AddAssembly(assembly, "example", "example", "example");
```

## 参见

- [本区域目录](../)