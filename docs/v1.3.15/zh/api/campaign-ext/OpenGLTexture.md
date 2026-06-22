<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OpenGLTexture`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OpenGLTexture

**命名空间:** TaleWorlds.TwoDimension.Standalone
**模块:** TaleWorlds.TwoDimension
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`OpenGLTexture` 是 `TaleWorlds.TwoDimension.Standalone` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public void Initialize(string name, int width, int height)
```

### CopyFrom

```csharp
public void CopyFrom(OpenGLTexture texture)
```

### Delete

```csharp
public void Delete()
```

### FromFile

```csharp
public static OpenGLTexture FromFile(ResourceDepot resourceDepot, string name)
```

### FromFile

```csharp
public static OpenGLTexture FromFile(string fullFilePath)
```

### Release

```csharp
public void Release()
```

### LoadFromFile

```csharp
public void LoadFromFile(ResourceDepot resourceDepot, string name)
```

### LoadFromFile

```csharp
public void LoadFromFile(string fullPathName)
```

### IsLoaded

```csharp
public bool IsLoaded()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)