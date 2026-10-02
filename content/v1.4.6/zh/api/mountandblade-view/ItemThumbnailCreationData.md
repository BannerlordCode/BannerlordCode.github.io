---
title: "ItemThumbnailCreationData"
description: "ItemThumbnailCreationData：TaleWorlds.MountAndBlade.View 的 public 类，继承 ThumbnailCreationData；公开成员 3 个（方法 0、属性 2、字段 0）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ItemThumbnailCreationData.cs。"
---
# ItemThumbnailCreationData

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class ItemThumbnailCreationData : ThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ItemThumbnailCreationData.cs`

## 概述

ItemThumbnailCreationData 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ItemThumbnailCreationData.cs。它是一个 public 类，实现/继承 ThumbnailCreationData，继承链为 ItemThumbnailCreationData → ThumbnailCreationData。public/protected 成员共 3 个：2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ItemThumbnailCreationData 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails），继承链 ItemThumbnailCreationData → ThumbnailCreationData。成员构成以属性为主（属性 2/3，方法 0/3），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ItemThumbnailCreationData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ItemObject` | `public ItemObject ItemObject` | 属性 |
| `AdditionalArgs` | `public string AdditionalArgs` | 属性 |
| `ItemThumbnailCreationData` | `public ItemThumbnailCreationData(ItemObject itemObject, string additionalArgs, Action<Texture>setAction, Action cancelAction) : base(itemObject.StringId, setAction, cancelAction)` | 构造函数 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ThumbnailCreationData](../ThumbnailCreationData)
- [同命名空间 AvatarThumbnailCache](../AvatarThumbnailCache)
- [同命名空间 AvatarThumbnailCreationData](../AvatarThumbnailCreationData)
- [同命名空间 BannerDebugInfo](../BannerDebugInfo)
- [同命名空间 BannerEditorTextureCache](../BannerEditorTextureCache)
