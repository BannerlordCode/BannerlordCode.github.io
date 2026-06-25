---
title: "OpenGLTexture"
description: "OpenGLTexture 的自动生成类参考。"
---
# OpenGLTexture

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class OpenGLTexture : ITexture`
**Base:** `ITexture`
**File:** `TaleWorlds.TwoDimension.Standalone/OpenGLTexture.cs`

## 概述

`OpenGLTexture` 位于 `TaleWorlds.TwoDimension.Standalone`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; set; }` |
| `Width` | `public int Width { get; set; }` |
| `Height` | `public int Height { get; }` |
| `Name` | `public string Name { get; }` |
| `ClampToEdge` | `public bool ClampToEdge { get; set; }` |

## 主要方法

### Initialize
`public void Initialize(string name, int width, int height)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 OpenGLTexture 实例
OpenGLTexture openGLTexture = ...;
openGLTexture.Initialize("example", 0, 0);
```

### CopyFrom
`public void CopyFrom(OpenGLTexture texture)`

**用途 / Purpose:** **用途 / Purpose:** 把当前对象的from状态复制到目标对象。

```csharp
// 先通过子系统 API 拿到 OpenGLTexture 实例
OpenGLTexture openGLTexture = ...;
openGLTexture.CopyFrom(texture);
```

### Delete
`public void Delete()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Delete 对应的操作。

```csharp
// 先通过子系统 API 拿到 OpenGLTexture 实例
OpenGLTexture openGLTexture = ...;
openGLTexture.Delete();
```

### FromFile
`public static OpenGLTexture FromFile(ResourceDepot resourceDepot, string name)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FromFile 对应的操作。

```csharp
// 静态调用，不需要实例
OpenGLTexture.FromFile(resourceDepot, "example");
```

### FromFile
`public static OpenGLTexture FromFile(string fullFilePath)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FromFile 对应的操作。

```csharp
// 静态调用，不需要实例
OpenGLTexture.FromFile("example");
```

### Release
`public void Release()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Release 对应的操作。

```csharp
// 先通过子系统 API 拿到 OpenGLTexture 实例
OpenGLTexture openGLTexture = ...;
openGLTexture.Release();
```

### LoadFromFile
`public void LoadFromFile(ResourceDepot resourceDepot, string name)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 from file。

```csharp
// 先通过子系统 API 拿到 OpenGLTexture 实例
OpenGLTexture openGLTexture = ...;
openGLTexture.LoadFromFile(resourceDepot, "example");
```

### LoadFromFile
`public void LoadFromFile(string fullPathName)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 from file。

```csharp
// 先通过子系统 API 拿到 OpenGLTexture 实例
OpenGLTexture openGLTexture = ...;
openGLTexture.LoadFromFile("example");
```

### IsLoaded
`public bool IsLoaded()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 loaded 状态或条件。

```csharp
// 先通过子系统 API 拿到 OpenGLTexture 实例
OpenGLTexture openGLTexture = ...;
var result = openGLTexture.IsLoaded();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
OpenGLTexture openGLTexture = ...;
openGLTexture.Initialize("example", 0, 0);
```

## 参见

- [本区域目录](../)