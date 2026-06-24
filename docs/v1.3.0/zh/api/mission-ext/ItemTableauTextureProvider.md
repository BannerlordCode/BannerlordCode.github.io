<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemTableauTextureProvider`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ItemTableauTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.TextureProviders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemTableauTextureProvider : TextureProvider`
**Base:** `TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ItemTableauTextureProvider.cs`

## 概述

`ItemTableauTextureProvider` 位于 `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ItemModifierId` | `public string ItemModifierId { get; set; }` |
| `StringId` | `public string StringId { get; set; }` |
| `Item` | `public ItemRosterElement Item { get; set; }` |
| `Ammo` | `public int Ammo { get; set; }` |
| `AverageUnitCost` | `public int AverageUnitCost { get; set; }` |
| `BannerCode` | `public string BannerCode { get; set; }` |
| `CurrentlyRotating` | `public bool CurrentlyRotating { get; set; }` |
| `RotateItemVertical` | `public float RotateItemVertical { get; set; }` |
| `RotateItemHorizontal` | `public float RotateItemHorizontal { get; set; }` |
| `InitialTiltRotation` | `public float InitialTiltRotation { get; set; }` |
| `InitialPanRotation` | `public float InitialPanRotation { get; set; }` |

## 主要方法

### Clear
`public override void Clear(bool clearNextFrame)`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### SetTargetSize
`public override void SetTargetSize(int width, int height)`

**用途 / Purpose:** 设置 `target size` 的值或状态。

### Tick
`public override void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

## 使用示例

```csharp
var value = new ItemTableauTextureProvider();
value.Clear(false);
```

## 参见

- [完整类目录](../catalog)