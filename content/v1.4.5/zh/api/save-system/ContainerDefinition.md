---
title: "ContainerDefinition"
description: "ContainerDefinition 的自动生成类参考。"
---
# ContainerDefinition

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class ContainerDefinition : TypeDefinitionBase`
**Base:** `TypeDefinitionBase`
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Definition/ContainerDefinition.cs`

## 概述

`ContainerDefinition` 位于 `TaleWorlds.SaveSystem.Definition`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Definition` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DefinedAssembly` | `public Assembly DefinedAssembly { get; }` |
| `CollectObjectsMethod` | `public CollectObjectsDelegate CollectObjectsMethod { get; }` |
| `HasNoChildObject` | `public bool HasNoChildObject { get; }` |

## 主要方法

### InitializeForAutoGeneration
`public void InitializeForAutoGeneration(CollectObjectsDelegate collectObjectsDelegate, bool hasNoChildObject)`

**用途 / Purpose:** 为 for auto generation 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 ContainerDefinition 实例
ContainerDefinition containerDefinition = ...;
containerDefinition.InitializeForAutoGeneration(collectObjectsDelegate, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ContainerDefinition containerDefinition = ...;
containerDefinition.InitializeForAutoGeneration(collectObjectsDelegate, false);
```

## 参见

- [本区域目录](../)