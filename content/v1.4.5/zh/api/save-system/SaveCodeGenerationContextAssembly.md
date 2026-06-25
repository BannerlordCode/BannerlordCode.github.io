---
title: "SaveCodeGenerationContextAssembly"
description: "SaveCodeGenerationContextAssembly 的自动生成类参考。"
---
# SaveCodeGenerationContextAssembly

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class SaveCodeGenerationContextAssembly`
**Base:** 无
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Definition/SaveCodeGenerationContextAssembly.cs`

## 概述

`SaveCodeGenerationContextAssembly` 位于 `TaleWorlds.SaveSystem.Definition`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Definition` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Assembly` | `public Assembly Assembly { get; }` |
| `Location` | `public string Location { get; }` |
| `FileName` | `public string FileName { get; }` |
| `DefaultNamespace` | `public string DefaultNamespace { get; }` |

## 主要方法

### AddClassDefinition
`public void AddClassDefinition(TypeDefinition classDefinition)`

**用途 / Purpose:** **用途 / Purpose:** 将 class definition 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 SaveCodeGenerationContextAssembly 实例
SaveCodeGenerationContextAssembly saveCodeGenerationContextAssembly = ...;
saveCodeGenerationContextAssembly.AddClassDefinition(classDefinition);
```

### AddStructDefinition
`public void AddStructDefinition(TypeDefinition classDefinition)`

**用途 / Purpose:** **用途 / Purpose:** 将 struct definition 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 SaveCodeGenerationContextAssembly 实例
SaveCodeGenerationContextAssembly saveCodeGenerationContextAssembly = ...;
saveCodeGenerationContextAssembly.AddStructDefinition(classDefinition);
```

### CheckIfGotAnyNonPrimitiveMembers
`public bool CheckIfGotAnyNonPrimitiveMembers(TypeDefinition typeDefinition)`

**用途 / Purpose:** **用途 / Purpose:** 检查if got any non primitive members在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 SaveCodeGenerationContextAssembly 实例
SaveCodeGenerationContextAssembly saveCodeGenerationContextAssembly = ...;
var result = saveCodeGenerationContextAssembly.CheckIfGotAnyNonPrimitiveMembers(typeDefinition);
```

### Generate
`public void Generate()`

**用途 / Purpose:** **用途 / Purpose:** 生成当前对象的实例、数据或表示。

```csharp
// 先通过子系统 API 拿到 SaveCodeGenerationContextAssembly 实例
SaveCodeGenerationContextAssembly saveCodeGenerationContextAssembly = ...;
saveCodeGenerationContextAssembly.Generate();
```

### GenerateText
`public string GenerateText()`

**用途 / Purpose:** **用途 / Purpose:** 生成text的实例、数据或表示。

```csharp
// 先通过子系统 API 拿到 SaveCodeGenerationContextAssembly 实例
SaveCodeGenerationContextAssembly saveCodeGenerationContextAssembly = ...;
var result = saveCodeGenerationContextAssembly.GenerateText();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SaveCodeGenerationContextAssembly saveCodeGenerationContextAssembly = ...;
saveCodeGenerationContextAssembly.AddClassDefinition(classDefinition);
```

## 参见

- [本区域目录](../)