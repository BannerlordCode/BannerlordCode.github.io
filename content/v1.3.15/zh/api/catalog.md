---
title: 完整类目录 / Complete Class Catalog
extra:
  sidebar: auto
---
# 完整类目录 (v1.3.15)

## 心智模型

先把 `完整类目录` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

本页汇总 1.3.15 源码中全部 **4819** 个面向 mod 开发的公开类型（已剔除代码生成/第三方/网络协议）。目录按领域分组，条目会优先跳到当前版本深度页；若该类型更适合放在跨版本页面或相邻领域页，也会直接跳到对应入口。

| 领域 Area | 类型数 Types | 用途 |
|------|------|------|
| [战役系统 Campaign System](./catalog-campaign) | 1829 | 战役主循环、队伍、家族、王国、任务等 |
| [战斗与引擎绑定 Mount & Blade](./catalog-mountandblade) | 1644 | Agent、Mission、队形、战斗逻辑与交互对象 |
| [核心 Core](./catalog-core) | 321 | 基础对象系统、装备、角色模板、通用数据 |
| [引擎 Engine](./catalog-engine) | 154 | Scene、材质、实体、纹理、骨骼与原生桥接 |
| [基础库 Library](./catalog-library) | 201 | 容器、数学、事件、序列化和基础运行时工具 |
| [Gauntlet UI](./catalog-ui) | 265 | Widget、Brush、UI 行为和屏幕层 |
| [存档系统 Save System](./catalog-save) | 56 | SaveManager、上下文、类型定义、驱动和序列化 |
| [网络/平台/服务 Network & Platform](./catalog-system) | 246 | DotNet、Network、PlatformService、Diamond 等 |
| [玩法模块 SandBox/StoryMode](./catalog-gameplay) | 1 | SandBox / StoryMode 玩法侧类型入口 |
| [本地化 Localization](./catalog-localization) | 21 | TextObject、文本管理和词法处理 |
| [输入系统 Input](./catalog-input) | 19 | 输入状态、键位和控制器抽象 |
| [其它 Other](./catalog-other) | 62 | 不属于上述主域的辅助类型 |
| **合计 Total** | **4819** | **按源码扫描自动汇总** |

> **重新生成 / Regenerate**
> 源码更新后在仓库根目录运行：`node BannerlordCode.github.io/tools/gen-class-catalog.mjs`
## 使用方式

1. 先按领域进入子目录页。
2. 再按命名空间和类型名定位到具体类页。
3. 若要评估升级影响，再从类页跳到 `/versions/*` 的跨版本对比。
