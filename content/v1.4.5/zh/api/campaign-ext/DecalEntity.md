---
title: "DecalEntity"
description: "DecalEntity 的自动生成类参考。"
---
# DecalEntity

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public struct DecalEntity`
**Base:** 无
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapScreen.cs`

## 概述

`DecalEntity` 位于 `SandBox.View.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameEntity` | `public GameEntity GameEntity { get; set; }` |
| `Decal` | `public Decal Decal { get; set; }` |

## 主要方法

### Create
`public static DecalEntity Create(Scene scene, string material, string entityName = null)`

**用途 / Purpose:** 创建当前对象的新实例或相关实体。

```csharp
// 静态调用，不需要实例
DecalEntity.Create(scene, "example", "example");
```

## 使用示例

```csharp
DecalEntity.Create(scene, "example", "example");
```

## 参见

- [本区域目录](../)