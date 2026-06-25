---
title: "TextureCreationInfo"
description: "TextureCreationInfo 的自动生成类参考。"
---
# TextureCreationInfo

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct TextureCreationInfo`
**Base:** 无
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/TextureCreationInfo.cs`

## 概述

`TextureCreationInfo` 位于 `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSuccess` | `public bool IsSuccess { get; }` |
| `IsFail` | `public bool IsFail { get; }` |

## 主要方法

### WithNewTexture
`public static TextureCreationInfo WithNewTexture(Texture texture = null)`

**用途 / Purpose:** 调用 WithNewTexture 对应的操作。

```csharp
// 静态调用，不需要实例
TextureCreationInfo.WithNewTexture(null);
```

### WithExistingTexture
`public static TextureCreationInfo WithExistingTexture(Texture texture)`

**用途 / Purpose:** 调用 WithExistingTexture 对应的操作。

```csharp
// 静态调用，不需要实例
TextureCreationInfo.WithExistingTexture(texture);
```

### Fail
`public static TextureCreationInfo Fail()`

**用途 / Purpose:** 调用 Fail 对应的操作。

```csharp
// 静态调用，不需要实例
TextureCreationInfo.Fail();
```

## 使用示例

```csharp
TextureCreationInfo.WithNewTexture(null);
```

## 参见

- [本区域目录](../)