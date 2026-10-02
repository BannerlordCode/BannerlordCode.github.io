---
title: "core-extra 桶 — 游戏内核与基础设施"
description: "v1.4.6 的 core-extra 桶收纳 TaleWorlds.Core / TaleWorlds.Library / TaleWorlds.DotNet 及默认桶落进来的类型：17 张手写页覆盖 mod 最常碰的内核类型，其余数百个公开类型尚未撰页。"
---
# core-extra 桶：游戏内核与基础设施

这是 v1.4.6 文档里最大的一个桶，也是最容易误解的一个：**桶名 `core-extra` 与 `TaleWorlds.Core` 程序集不是一对一关系**。按权威映射 `tools/_dir-map-canonical.json`，这个桶同时收三个命名空间根：

- `TaleWorlds.Core`（232 个 `.cs`，280 个公开类型）—— 一局游戏的核心：物品与技能定义、游戏状态栈、GameModel 模型层、随机与异常类型、XML 加载helper。
- `TaleWorlds.Library`（198 个 `.cs`，204 个公开类型）—— 与游戏规则无关的基础设施：数学与集合（`Vec3`、`Mat3`、`MBList`）、反射包装（`DotNetObject` / `Managed` 的对侧）、调试与遥测、文件与平台抽象。
- `TaleWorlds.DotNet`（50 个 `.cs`，31 个公开类型）—— 原生互操作层：`ManagedObject`、`NativeArray`、`GameApplicationDomainController` 这类「C# 调 native」的包装。

外加三个命中默认桶的：`TaleWorlds.LinQuick`、`TaleWorlds.Starter.Library`，以及没命中任何前缀规则而落到默认桶的平台层命名空间（`TaleWorlds.PlatformService*`、`TaleWorlds.PlayerServices`、`TaleWorlds.ServiceDiscovery.Client`、`TaleWorlds.PSAI`）。最后这批 mod 基本用不到，列在这里是为了说明它们为什么出现在桶计数里。

**mod 作者在什么场景碰到它**：几乎所有不涉及具体玩法系统的代码都落在这里——给物品和技能加自定义数据（[ItemObject](./ItemObject)、[Equipment](./Equipment)、[WeaponComponent](./WeaponComponent)、[SkillObject](./SkillObject)）、注册自己的计算模型（[GameModel](./GameModel) → [GameModelsManager](./GameModelsManager)）、接管 UI 与逻辑之间的消息通道（[InformationManager](./InformationManager)）、写界面绑定基类（[ViewModel](./ViewModel) + [BindingPath](./BindingPath)）、以及在任何地方塞平衡性数字（[ParameterContainer](./ParameterContainer)）。真正的「mod 入口」不在这里，在 [core](../core/MBSubModuleBase)。

## 已手写的页面

本桶已手写 17 张页。按用途分组：

**物品 / 装备 / 锻造 / 体型**

- [ItemObject](./ItemObject) — 物品定义对象，XML 加载的核心数据类，把武器、马、护甲、旗帜、鞍具、食品等行为拆到 `ItemComponent` 派生类上。
- [Equipment](./Equipment) — 装备槽容器，固定 12 个槽位（0–4 武器、5–9 护甲、10 马具、11 披风），提供槽位合法性校验与重量/护甲汇总。
- [WeaponComponent](./WeaponComponent) — 物品的武器组件，一件武器形态持有一份 `WeaponComponentData`，提供主武器与物品类型推导。
- [Crafting](./Crafting) — 锻造会话对象，持有一个 `WeaponDesign` 与撤销重做历史，负责把部件组合生成成 `ItemObject` 并导出 XML。
- [BodyProperties](./BodyProperties) — 角色体型数据，动态参数（年龄/体重/体型）加 8 个静态特征位包，可从 XML 解析、随机生成并序列化回去。
- [Banner](./Banner) — 旗号数据容器，有序的 `BannerData` 列表（0 号背景、1 号起图标），支持序列化与颜色轮换。

**游戏模型与状态**

- [GameModel](./GameModel) — 游戏模型层的标记基类，`GameModelsManager` 靠它做类型过滤，mod 的自定义模型全部继承它。
- [GameModelsManager](./GameModelsManager) — 模型集合的持有者，构造时快照一批 `GameModel`，按类型倒序查找并返回最后一个匹配项。
- [GameStateManager](./GameStateManager) — 状态栈管理器，维护有序 `GameState` 列表，负责 push/pop/clean 时的停用、终结、激活与回调广播。
- [Game](./Game) — 一次游戏会话的根对象，持有 `MBObjectManager`、`GameStateManager`、`GameTextManager` 与 `GameHandler` 集合，自身就是存档根类型。
- [GameManagerBase](./GameManagerBase) — 一局游戏的驱动骨架，组件容器加七步加载状态机，把 Tick 和网络事件广播给所有组件与 `Game`。

**UI 与参数**

- [ViewModel](./ViewModel) — UI 视图模型基类，按名称暴露属性并给绑定引擎提供反射式读写与命令派发。
- [BindingPath](./BindingPath) — UI 绑定路径，按反斜杠分段的对象属性路径，支持切分、归约 `..`、拼接与前缀相关性判断。
- [InformationManager](./InformationManager) — 纯静态的信息通道，所有方法都是对一组静态事件的无条件转发：UI 侧订阅，逻辑侧调用。
- [ParameterContainer](./ParameterContainer) — 字符串键值参数袋，启动参数、XML 覆写值、平衡性数字的统一载体，提供各数值类型的强类型取值。
- [EventBase](./EventBase) — 事件系统的事件类型标记基类，`EventManager` 只接受继承自它的类型作为注册与触发键，类本身零成员。

## 尚未撰写的部分

上面 17 个类型来自三个命名空间共 515 个公开类型中的 17 个，**剩下 498 个没有页面**。这个桶是全站最大的缺口，下面只列 mod 作者最可能去查的一批，其余类型要么是内部实现、要么是 `enum`、要么落别处去查：

- 游戏流程与加载：`GameState`、`GameType`、`IGameStarter`、`GameHandler`、`GameManagerComponent`、`GameStateManagerType`、`MBSaveLoad`、`SaveableCoreTypeDefiner`
- 物品与部件体系：`ItemComponent`、`ArmorComponent`、`HorseComponent`、`SaddleComponent`、`BannerComponent`、`TradeItemComponent`、`ItemModifier`、`ItemModifierGroup`、`CraftingTemplate`、`CraftingPiece`、`WeaponDesign`、`WeaponDesignElement`、`RefiningFormula`
- 装备与外观：`EquipmentElement`、`EquipmentIndex`、`CharacterObject`、`BasicCharacterObject`、`PropertyObject`、`Property`、`DrivenProperty`、`PropertyOwner`
- 身体与外观部件：`DynamicBodyProperties`、`StaticBodyProperties`、`FaceGen`、`BodyPropertiesJsonConverter`
- 随机、异常与通用工具：`MBRandom`、`MBFastRandom`、`MBPerlin`、`MBUtil`、`FilePaths`、`XmlHelper`、`Timer`、`GameText`、`GameTextManager`
- `TaleWorlds.Library` 数学与集合：`Vec2`、`Vec3`、`Mat2`、`Mat3`、`Quaternion`、`Transformation`、`Color`、`MBList`、`MBReadOnlyList`、`MBBindingList`、`MBArrayList`、`MBMath`、`StackArray`
- `TaleWorlds.Library` 平台与工具：`Debug`、`IDebugManager`、`EventManager`（`EventBase` 的注册与触发入口）、`ApplicationVersion`、`FileHelper`、`IHttpDriver` / `DotNetHttpDriver`、`PathFinder`、`AssemblyLoader`
- `TaleWorlds.DotNet` 互操作：`ManagedObject`、`DotNetObject`、`Managed`、`NativeArray`、`NativeString`、`GameApplicationDomainController`、`ICallbackManager`

想确认某个类型实际落在哪个桶，见 [模块地图](../../architecture/module-map)。这些类型大多只在「读官方实现找写法」时才需要，遇到具体任务再去查对应源码目录即可。

## 导航

- ↑ 上一级：[API 参考](../)
- ↑↑ 语言根：[zh](../../)
- ↑↑↑ 版本首页：v1.4.6
- ↔ 兄弟桶：[core](../core/MBSubModuleBase)（模块入口） · [campaign](../campaign/Campaign)（战役世界） · [mission](../mission/Mission)（一场战斗）
- ↔ 跨版本：[版本总览](../../../../versions/)