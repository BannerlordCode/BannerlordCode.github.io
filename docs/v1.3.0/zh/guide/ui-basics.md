---
title: UI 系统基础 / UI System Basics
description: v1.3.0 GauntletMovie 入门 / v1.3.0 GauntletMovie introduction
---

# UI 系统基础 / UI System Basics

**v1.3.0 版本**

> 注意：本页面介绍 v1.3.0 的 UI 系统基础。v1.3.15 有增强的 Gauntlet UI。如需完整内容，请查看 [v1.3.15 Gauntlet UI](../../v1.3.15/zh/guide/gauntlet-ui.md)。

## 概述 / Overview

v1.3.0 的 Gauntlet UI 系统已经可以创建自定义界面。

v1.3.0's Gauntlet UI system can already create custom interfaces.

## GauntletMovie

### 基本结构

```csharp
using TaleWorlds.MountAndBlade.Gauntlet;

namespace MyModule.UI
{
    public class MyMovie : GauntletMovie
    {
        public override void OnCreate()
        {
            base.OnCreate();
            LoadMovie("MyUI");
        }
    }
}
```

### 生命周期

- `OnCreate()` - 创建时
- `OnInvisible()` - 不可见时
- `OnVisible()` - 可见时

## 与 v1.3.15 的差异

| 特性 | v1.3.0 | v1.3.15 |
|------|--------|---------|
| GauntletMovie | 支持 | 支持 |
| ViewModel | 支持 | 增强的绑定 |
| ScreenManager | 支持 | 支持 |

---

## 相关文档 / Related Documentation

- [v1.3.15 Gauntlet UI](../../v1.3.15/zh/guide/gauntlet-ui.md)
- [API 参考](../../api/gui/)
