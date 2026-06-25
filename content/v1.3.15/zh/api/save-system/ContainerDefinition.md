---
title: "ContainerDefinition"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ContainerDefinition`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ContainerDefinition

**命名空间:** TaleWorlds.SaveSystem.Definition
**模块:** TaleWorlds.SaveSystem
**类型:** `public class ContainerDefinition : TypeDefinitionBase`
**Base:** `TypeDefinitionBase`
**领域:** save-system

## 概述

`ContainerDefinition` 位于 `TaleWorlds.SaveSystem.Definition`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

**用途 / Purpose:** 初始化 `for auto generation` 的状态、资源或绑定。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 ContainerDefinition 实例，再调用它的公开方法
var value = new ContainerDefinition();
value.InitializeForAutoGeneration(collectObjectsDelegate, false);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)
