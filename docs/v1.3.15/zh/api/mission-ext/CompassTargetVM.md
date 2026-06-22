<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CompassTargetVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CompassTargetVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`CompassTargetVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Banner` | `public BannerImageIdentifierVM Banner { get; set; }` |
| `IsFlag` | `public bool IsFlag { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `Color2` | `public string Color2 { get; set; }` |
| `Color` | `public string Color { get; set; }` |
| `IconType` | `public string IconType { get; set; }` |
| `IconSpriteType` | `public string IconSpriteType { get; set; }` |
| `LetterCode` | `public string LetterCode { get; set; }` |
| `FullPosition` | `public float FullPosition { get; set; }` |
| `Position` | `public float Position { get; set; }` |
| `IsAttacker` | `public bool IsAttacker { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |


## 主要方法

### RefreshColor

```csharp
public void RefreshColor(uint color, uint color2)
```

### Refresh

```csharp
public virtual void Refresh(float circleX, float x, float distance)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)