<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TextureProvider`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextureProvider

**命名空间:** TaleWorlds.GauntletUI
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`TextureProvider` 是 `TaleWorlds.GauntletUI` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `SourceInfo` | `public string SourceInfo { get; set; }` |


## 主要方法

### SetTargetSize

```csharp
public virtual void SetTargetSize(int width, int height)
```

### GetTextureForRender

```csharp
public Texture GetTextureForRender(TwoDimensionContext context, string name = null)
```

### Tick

```csharp
public virtual void Tick(float dt)
```

### Clear

```csharp
public virtual void Clear(bool clearNextFrame)
```

### SetProperty

```csharp
public void SetProperty(string name, object value)
```

### GetProperty

```csharp
public object GetProperty(string name)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)