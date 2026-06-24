---
title: 完整类目录 / Complete Class Catalog
sidebar: auto
---

# 完整类目录 (v1.3.0)

## 心智模型

先把 `完整类目录` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

1.3.0 源码中全部 **4756** 个 modder 相关公开类型（已剔除代码生成/第三方/网络协议），按领域分组。其中 **4670** 个已有深度文档页。

| 领域 Area | 类型数 Types | 已文档 Documented | 覆盖 Coverage |
|------|------|------|------|
| [战役系统 Campaign System](./catalog-campaign) | 1822 | 1789 | 98% |
| [战斗与引擎绑定 Mount & Blade](./catalog-mountandblade) | 1115 | 1104 | 99% |
| [核心 Core](./catalog-core) | 313 | 301 | 96% |
| [引擎 Engine](./catalog-engine) | 154 | 150 | 97% |
| [基础库 Library](./catalog-library) | 200 | 191 | 96% |
| [Gauntlet UI](./catalog-ui) | 179 | 177 | 99% |
| [存档系统 Save System](./catalog-save) | 0 | 0 | 0% |
| [网络/平台/服务 Network & Platform](./catalog-system) | 101 | 101 | 100% |
| [玩法模块 SandBox/StoryMode](./catalog-gameplay) | 802 | 793 | 99% |
| [本地化 Localization](./catalog-localization) | 21 | 18 | 86% |
| [输入系统 Input](./catalog-input) | 19 | 19 | 100% |
| [其它 Other](./catalog-other) | 30 | 27 | 90% |
| **合计 Total** | **4756** | **4670** | **98%** |

::: tip 重新生成 / Regenerate
源码更新后在仓库根目录运行：`node BannerlordCode.github.io/tools/gen-class-catalog.mjs`
:::