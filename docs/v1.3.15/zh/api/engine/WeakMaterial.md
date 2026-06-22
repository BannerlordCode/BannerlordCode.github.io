<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WeakMaterial`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeakMaterial

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 结构体 struct struct
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`WeakMaterial` 是 `TaleWorlds.Engine` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `Pointer` | `public UIntPtr Pointer { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `Name` | `public string Name { get; set; }` |


## 主要方法

### GetShader

```csharp
public Shader GetShader()
```

### GetShaderFlags

```csharp
public ulong GetShaderFlags()
```

### SetShaderFlags

```csharp
public void SetShaderFlags(ulong flagEntry)
```

### SetMeshVectorArgument

```csharp
public void SetMeshVectorArgument(float x, float y, float z, float w)
```

### SetTexture

```csharp
public void SetTexture(Material.MBTextureType textureType, Texture texture)
```

### SetTextureAtSlot

```csharp
public void SetTextureAtSlot(int textureSlot, Texture texture)
```

### SetAreaMapScale

```csharp
public void SetAreaMapScale(float scale)
```

### SetEnableSkinning

```csharp
public void SetEnableSkinning(bool enable)
```

### UsingSkinning

```csharp
public bool UsingSkinning()
```

### GetTexture

```csharp
public Texture GetTexture(Material.MBTextureType textureType)
```

### GetTextureWithSlot

```csharp
public Texture GetTextureWithSlot(int textureSlot)
```

### AddMaterialShaderFlag

```csharp
public void AddMaterialShaderFlag(string flagName, bool showErrors)
```

### RemoveMaterialShaderFlag

```csharp
public void RemoveMaterialShaderFlag(string flagName)
```

### Equals

```csharp
public override bool Equals(object obj)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)