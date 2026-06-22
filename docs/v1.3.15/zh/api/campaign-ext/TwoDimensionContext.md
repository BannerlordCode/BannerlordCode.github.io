<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TwoDimensionContext`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TwoDimensionContext

**命名空间:** TaleWorlds.TwoDimension
**模块:** TaleWorlds.TwoDimension
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`TwoDimensionContext` 是 `TaleWorlds.TwoDimension` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Width` | `public float Width { get; }` |
| `Height` | `public float Height { get; }` |
| `Platform` | `public ITwoDimensionPlatform Platform { get; }` |
| `ResourceContext` | `public ITwoDimensionResourceContext ResourceContext { get; }` |
| `ResourceDepot` | `public ResourceDepot ResourceDepot { get; }` |
| `IsDebugModeEnabled` | `public bool IsDebugModeEnabled { get; }` |


## 主要方法

### PlaySound

```csharp
public void PlaySound(string soundName)
```

### CreateSoundEvent

```csharp
public void CreateSoundEvent(string soundName)
```

### StopAndRemoveSoundEvent

```csharp
public void StopAndRemoveSoundEvent(string soundName)
```

### PlaySoundEvent

```csharp
public void PlaySoundEvent(string soundName)
```

### DrawImage

```csharp
public void DrawImage(SimpleMaterial material, in ImageDrawObject drawObject2D, int layer = 0)
```

### DrawText

```csharp
public void DrawText(TextMaterial material, in TextDrawObject drawObject2D, int layer = 0)
```

### BeginDebugPanel

```csharp
public void BeginDebugPanel(string panelTitle)
```

### EndDebugPanel

```csharp
public void EndDebugPanel()
```

### DrawDebugText

```csharp
public void DrawDebugText(string text)
```

### DrawDebugTreeNode

```csharp
public bool DrawDebugTreeNode(string text)
```

### PopDebugTreeNode

```csharp
public void PopDebugTreeNode()
```

### DrawCheckbox

```csharp
public void DrawCheckbox(string label, ref bool isChecked)
```

### IsDebugItemHovered

```csharp
public bool IsDebugItemHovered()
```

### LoadTexture

```csharp
public Texture LoadTexture(string name)
```

### SetScissor

```csharp
public void SetScissor(ScissorTestInfo scissor)
```

### ResetScissor

```csharp
public void ResetScissor()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)