---
title: "CharacterThumbnailCreationData"
description: "CharacterThumbnailCreationData：TaleWorlds.MountAndBlade.View 的 public 类，继承 ThumbnailCreationData；公开成员 5 个（方法 0、属性 4、字段 0）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/CharacterThumbnailCreationData.cs。"
---
# CharacterThumbnailCreationData

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class CharacterThumbnailCreationData : ThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/CharacterThumbnailCreationData.cs`

## 概述

CharacterThumbnailCreationData 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/CharacterThumbnailCreationData.cs。它是一个 public 类，实现/继承 ThumbnailCreationData，继承链为 CharacterThumbnailCreationData → ThumbnailCreationData。public/protected 成员共 5 个：4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterThumbnailCreationData 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails），继承链 CharacterThumbnailCreationData → ThumbnailCreationData。成员构成以属性为主（属性 4/5，方法 0/5），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/CharacterThumbnailCreationData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterCode` | `public CharacterCode CharacterCode` | 属性 |
| `IsBig` | `public bool IsBig` | 属性 |
| `CustomSizeX` | `public int CustomSizeX` | 属性 |
| `CustomSizeY` | `public int CustomSizeY` | 属性 |
| `CharacterThumbnailCreationData` | `public CharacterThumbnailCreationData(CharacterCode characterCode, Action<Texture>setAction, Action cancelAction, bool isBig, int customSizeX = -1, int customSizeY = -1) : base("", setAction, cancelAction)` | 构造函数 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ThumbnailCreationData](../ThumbnailCreationData)
- [同命名空间 AvatarThumbnailCache](../AvatarThumbnailCache)
- [同命名空间 AvatarThumbnailCreationData](../AvatarThumbnailCreationData)
- [同命名空间 BannerDebugInfo](../BannerDebugInfo)
- [同命名空间 BannerEditorTextureCache](../BannerEditorTextureCache)
