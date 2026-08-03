---
title: "SandBox/StoryMode/Native 阅读政策（v1.3.15）"
description: "如何阅读 SandBox、StoryMode、Native 三个模块：Native 是引擎 RE 桥（非日常 mod API），SandBox 是范例模块，StoryMode 是主线战役。日常 mod 应桥回 TaleWorlds.* 托管 API。"
---
# SandBox / StoryMode / Native 阅读政策

> 这三个模块定位不同，混为一谈会浪费时间。本页给出「该读什么、不该读什么、读完回到哪」。

## 一句话职责

- **SandBox**：官方范例模块（`Modules.SandBox`），承载大量可参考的 Behavior / Quest / 对话实现。学「怎么做」的最佳样本。
- **StoryMode**：主线战役模块，依赖 SandBox，提供剧情内容。mod 一般只复用其机制，不直接改剧情。
- **Native**：引擎原生层 RE（reverse-engineered）桥，对应 `native-1.x-src/` 源码。暴露 `IMB*` 接口与底层回调。**不是日常 mod API**。

## 心智模型：阅读优先级

```
日常 mod 开发
  → 读 TaleWorlds.CampaignSystem / MountAndBlade（托管 API，本 v1.3.15/zh/api）
  → 卡住时看 SandBox 的参考实现（范例，不是规范）
  → 极少见：需要理解引擎底层时才翻 Native（桥回 IMB*）
```

## 各模块的读法

### SandBox（范例，值得读）
- 找「官方怎么实现 X」：搜索 `Modules.SandBox` 里的 `CampaignBehavior`、`Quest`、`Dialog`。
- 文档化：其公开类型已纳入 [campaign-ext 模块](../../api/campaign-ext/) 与 [campaign 模块](../../api/campaign/) 的覆盖目标。

## 可运行的 SandBox 链路

下面的顺序对应 v1.4.5 `Bannerlord.Source/Modules.SandBox` 中的真实模块边界；
契约链接仍指向本 v1.3.15 托管 API。每一步只负责一个生命周期阶段：

1. `MBSubModuleBase.OnGameStart` 收到 `IGameStarter`。
2. 战役启动时转换为 `CampaignGameStarter`，只调用一次 `AddBehavior`；行为实现
   `RegisterEvents` 与 `SyncData(IDataStore)`。
3. 从行为注册 `DialogFlow` 或 `GameMenu`。条件只决定选项是否可见，结果回调再调用一个
   `*Action.Apply` 完成世界状态变更。
4. 需要替换计算时，在启动注册阶段调用 `AddModel`；消费者通过
   `Campaign.Current.Models` 读取替换模型。
5. Screen 或 Mission 创建 ViewModel、挂载 `GauntletLayer`，并在 `OnFinalize` 或屏幕销毁时释放。

先读 [CampaignBehaviorBase](../../api/campaign-ext/CampaignBehaviorBase)、
[CampaignGameStarter](../../api/campaign-ext/CampaignGameStarter)、
[DialogFlow](../../api/campaign-ext/DialogFlow)、
[GameMenu](../../api/campaign-ext/GameMenu)、
[GameModels](../../api/campaign-ext/GameModels) 和
[GauntletLayer](../../api/engine/GauntletLayer)，再回看 SandBox 的具体实现。
不要把 SandBox 私有类当作稳定 SDK，也不要在战役创建前读取 `Campaign.Current`。

### StoryMode（主线，少改）
- 提供剧情内容；mod 通过机制扩展而非改写。参考其 Behavior 组织方式即可。

### Native（桥，慎读）
- 仅当托管 API 没暴露你需要的能力时，才去 `native-1.x-src/` 看 `IMB*` 接口与引擎回调。
- mod 日常应桥回 [engine 模块](../../api/engine/)（如 [GauntletLayer](../../api/engine/GauntletLayer/)）而非直接调原生。
- 详见 [原生互操作](../native-interop/)。

Native 只保留可追溯的 subsystem/provenance 索引：

| 边界 | 证据页 | 托管交接 |
| --- | --- | --- |
| 启动导出 | `native-1.3.15-src/exports-and-bridge`（`WotsMain*`、`pass_managed_*`） | `MBDotNet`、`LibraryApplicationInterface` |
| 引擎回调 | `native-1.3.15-src/engine-core`（`ftdnNative_*`、callback 表） | `TaleWorlds.Engine` 包装器和 `[EngineMethod]` 接口 |
| Mission/Scene 桥 | `native-1.3.15-src/mission`、`scene` | `Mission`、`Scene`、`Agent` 与托管 Mission 行为 |
| 渲染/物理 | `native-1.3.15-src/rendering`、`physics` | Engine 托管对象；不要在 Campaign Behavior 中直接 P/Invoke |

`IMB*` 与 `[EngineMethod]` 只是来源锚点，不代表 Native DLL 是受支持的 mod ABI；
版本特定地址必须留在 Native 来源页中，不能当作稳定托管入口。

## 参见

- ↑ [架构总览](../)
- ↔ [噪声政策](../noise-policy/) · [原生互操作](../native-interop/) · [模块系统](../module-system/)
- ↓ [API 参考](../../api/)
