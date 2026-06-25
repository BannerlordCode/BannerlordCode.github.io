---
title: "WeakMaterial"
description: "WeakMaterial 的自动生成类参考。"
---
# WeakMaterial

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct WeakMaterial`
**Base:** 无
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/WeakMaterial.cs`

## 概述

`WeakMaterial` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Pointer` | `public UIntPtr Pointer { get; }` |
| `Name` | `public string Name { get; set; }` |

## 主要方法

### GetShader
`public Shader GetShader()`

**用途 / Purpose:** 读取并返回当前对象中 「shader」 的结果。

```csharp
// 先通过子系统 API 拿到 WeakMaterial 实例
WeakMaterial weakMaterial = ...;
var result = weakMaterial.GetShader();
```

### GetShaderFlags
`public ulong GetShaderFlags()`

**用途 / Purpose:** 读取并返回当前对象中 「shader flags」 的结果。

```csharp
// 先通过子系统 API 拿到 WeakMaterial 实例
WeakMaterial weakMaterial = ...;
var result = weakMaterial.GetShaderFlags();
```

### SetShaderFlags
`public void SetShaderFlags(ulong flagEntry)`

**用途 / Purpose:** 为 「shader flags」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 WeakMaterial 实例
WeakMaterial weakMaterial = ...;
weakMaterial.SetShaderFlags(0);
```

### SetMeshVectorArgument
`public void SetMeshVectorArgument(float x, float y, float z, float w)`

**用途 / Purpose:** 为 「mesh vector argument」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 WeakMaterial 实例
WeakMaterial weakMaterial = ...;
weakMaterial.SetMeshVectorArgument(0, 0, 0, 0);
```

### SetTexture
`public void SetTexture(Material.MBTextureType textureType, Texture texture)`

**用途 / Purpose:** 为 「texture」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 WeakMaterial 实例
WeakMaterial weakMaterial = ...;
weakMaterial.SetTexture(textureType, texture);
```

### SetTextureAtSlot
`public void SetTextureAtSlot(int textureSlot, Texture texture)`

**用途 / Purpose:** 为 「texture at slot」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 WeakMaterial 实例
WeakMaterial weakMaterial = ...;
weakMaterial.SetTextureAtSlot(0, texture);
```

### SetAreaMapScale
`public void SetAreaMapScale(float scale)`

**用途 / Purpose:** 为 「area map scale」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 WeakMaterial 实例
WeakMaterial weakMaterial = ...;
weakMaterial.SetAreaMapScale(0);
```

### SetEnableSkinning
`public void SetEnableSkinning(bool enable)`

**用途 / Purpose:** 为 「enable skinning」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 WeakMaterial 实例
WeakMaterial weakMaterial = ...;
weakMaterial.SetEnableSkinning(false);
```

### UsingSkinning
`public bool UsingSkinning()`

**用途 / Purpose:** 处理与 「using skinning」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 WeakMaterial 实例
WeakMaterial weakMaterial = ...;
var result = weakMaterial.UsingSkinning();
```

### GetTexture
`public Texture GetTexture(Material.MBTextureType textureType)`

**用途 / Purpose:** 读取并返回当前对象中 「texture」 的结果。

```csharp
// 先通过子系统 API 拿到 WeakMaterial 实例
WeakMaterial weakMaterial = ...;
var result = weakMaterial.GetTexture(textureType);
```

### GetTextureWithSlot
`public Texture GetTextureWithSlot(int textureSlot)`

**用途 / Purpose:** 读取并返回当前对象中 「texture with slot」 的结果。

```csharp
// 先通过子系统 API 拿到 WeakMaterial 实例
WeakMaterial weakMaterial = ...;
var result = weakMaterial.GetTextureWithSlot(0);
```

### AddMaterialShaderFlag
`public void AddMaterialShaderFlag(string flagName, bool showErrors)`

**用途 / Purpose:** 将 「material shader flag」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 WeakMaterial 实例
WeakMaterial weakMaterial = ...;
weakMaterial.AddMaterialShaderFlag("example", false);
```

### RemoveMaterialShaderFlag
`public void RemoveMaterialShaderFlag(string flagName)`

**用途 / Purpose:** 从当前容器或状态中移除 「material shader flag」。

```csharp
// 先通过子系统 API 拿到 WeakMaterial 实例
WeakMaterial weakMaterial = ...;
weakMaterial.RemoveMaterialShaderFlag("example");
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 WeakMaterial 实例
WeakMaterial weakMaterial = ...;
var result = weakMaterial.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 WeakMaterial 实例
WeakMaterial weakMaterial = ...;
var result = weakMaterial.GetHashCode();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WeakMaterial weakMaterial = ...;
weakMaterial.GetShader();
```

## 参见

- [本区域目录](../)