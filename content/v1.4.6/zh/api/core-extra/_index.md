---
title: "core-extra 桶 — 游戏内核与基础设施"
description: "v1.4.6 的 core-extra 桶收纳 TaleWorlds.Core / TaleWorlds.Library / TaleWorlds.DotNet 及默认桶落进来的类型：47 张手写页覆盖 mod 最常碰的内核类型，其余 414 个公开类型尚未撰页。"
---
# core-extra 桶：游戏内核与基础设施

这是 v1.4.6 文档里最大的一个桶，也是最容易误解的一个：**桶名 `core-extra` 与 `TaleWorlds.Core` 程序集不是一对一关系**。按权威映射 `tools/_dir-map-canonical.json`，这个桶同时收三个命名空间根：

- `TaleWorlds.Core`（232 个 `.cs`，280 个公开类型）—— 一局游戏的核心：物品与技能定义、游戏状态栈、GameModel 模型层、随机与异常类型、XML 加载helper。
- `TaleWorlds.Library`（198 个 `.cs`，204 个公开类型）—— 与游戏规则无关的基础设施：数学与集合（`Vec3`、`Mat3`、`MBList`）、反射包装（`DotNetObject` / `Managed` 的对侧）、调试与遥测、文件与平台抽象。
- `TaleWorlds.DotNet`（50 个 `.cs`，31 个公开类型）—— 原生互操作层：`ManagedObject`、`NativeArray`、`GameApplicationDomainController` 这类「C# 调 native」的包装。

外加三个命中默认桶的：`TaleWorlds.LinQuick`、`TaleWorlds.Starter.Library`，以及没命中任何前缀规则而落到默认桶的平台层命名空间（`TaleWorlds.PlatformService*`、`TaleWorlds.PlayerServices`、`TaleWorlds.ServiceDiscovery.Client`、`TaleWorlds.PSAI`）。最后这批 mod 基本用不到，列在这里是为了说明它们为什么出现在桶计数里。

**mod 作者在什么场景碰到它**：几乎所有不涉及具体玩法系统的代码都落在这里——给物品和技能加自定义数据（[ItemObject](./ItemObject)、[Equipment](./Equipment)、[WeaponComponent](./WeaponComponent)、[SkillObject](./SkillObject)）、注册自己的计算模型（[GameModel](./GameModel) → [GameModelsManager](./GameModelsManager)）、接管 UI 与逻辑之间的消息通道（[InformationManager](./InformationManager)）、写界面绑定基类（[ViewModel](./ViewModel) + [BindingPath](./BindingPath)）、以及在任何地方塞平衡性数字（[ParameterContainer](./ParameterContainer)）。真正的「mod 入口」不在这里，在 [core](../core/MBSubModuleBase)。

## 已手写的页面

本桶已手写 47 张页。按用途分组：

**物品 / 装备 / 锻造 / 体型**

- [ItemObject](./ItemObject) — 物品定义对象，XML 加载的核心数据类，把武器、马、护甲、旗帜、鞍具、食品等行为拆到 `ItemComponent` 派生类上。
- [Equipment](./Equipment) — 装备槽容器，固定 12 个槽位（0–4 武器、5–9 护甲、10 马具、11 披风），提供槽位合法性校验与重量/护甲汇总。
- [WeaponComponent](./WeaponComponent) — 物品的武器组件，一件武器形态持有一份 `WeaponComponentData`，提供主武器与物品类型推导。
- [Crafting](./Crafting) — 锻造会话对象，持有一个 `WeaponDesign` 与撤销重做历史，负责把部件组合生成成 `ItemObject` 并导出 XML。
- [BodyProperties](./BodyProperties) — 角色体型数据，动态参数（年龄/体重/体型）加 8 个静态特征位包，可从 XML 解析、随机生成并序列化回去。
- [Banner](./Banner) — 旗号数据容器，有序的 `BannerData` 列表（0 号背景、1 号起图标），支持序列化与颜色轮换。
- [ItemComponent](./ItemComponent) — 物品的行为插槽。它自己不带任何数值，只回答两个问题：我挂在哪个物品上、这个物品用哪一组品质词缀。真正干活的是它的派生类。
- [ArmorComponent](./ArmorComponent) — 六个组件派生实现之一，回答「这件东西穿上身之后，能挡多少伤害、盖住哪块身体、网格怎么变形」，由物品定义里的装备节点装配到单槽上。
- [HorseComponent](./HorseComponent) — 马匹物品的行为插件，把「这是坐骑 / 驮畜 / 牲口」的判定和骑乘手感数值放在一处。
- [SaddleComponent](./SaddleComponent) — 全部源码 20 行，去掉注释后只剩一个构造函数和一个复制覆写，没有任何属性、字段或反序列化覆写。它的全部语义就是「存在性」：物品靠它判断有没有马具。
- [BannerComponent](./BannerComponent) — 六个组件派生实现里**唯一继承链不是直连基类**的一个：它继承武器组件，所以一件旗帜同时具备武器组件的全部能力。
- [TradeItemComponent](./TradeItemComponent) — 贸易品与食物的行为插件，全部源码 54 行，只带一个数据成员：让队伍士兵开心的士气加成。
- [ItemModifier](./ItemModifier) — 在物品基础数值上加一层修正。是被品质词缀组收集的词缀条目，反序列化读的是定义文件里修正节点上的那一批属性。
- [ItemModifierGroup](./ItemModifierGroup) — 回答「这件物品能从哪些品质词缀里长出来，长出来的概率各是多少」，是一个从定义文件加载的全局数据对象。
- [PropertyObject](./PropertyObject) — 「一个可被对象管理器寻址、且带本地化名称与描述的数据对象」这条基线的抽象，自身只有名称与描述两个字段，以及取名、初始化与构造函数三个公开方法。
- [EquipmentIndex](./EquipmentIndex) — 12 个装备槽的整数编号表，是装备容器的寻址语言：枚举值就是内部槽位数组的下标。
- [EquipmentElement](./EquipmentElement) — 「一个装备槽里装了什么」的完整答案，是值语义的装备容器：装本体、品质词缀、任务物品标记与纯外观标记四样东西。
- [CraftingTemplate](./CraftingTemplate) — 一份锻造**图纸**而不是工具类，从定义文件加载、靠标识寻址；全部数据属性都是只读，运行期想改只能改文件。
- [CraftingPiece](./CraftingPiece) — 锻造系统里唯一一个纯粹的数据表行：不可派生、属性只读、唯一写入口是反序列化。刀身 / 护手 / 柄 / 尾锤四类零件共用同一个类，靠零件类型区分。
- [WeaponDesign](./WeaponDesign) — 「锻造结果」的**值对象**而不是流程对象：构造时一次就把几何全部算完并冻结。
- [WeaponDesignElement](./WeaponDesignElement) — 把「一个零件 + 一个缩放百分比」封成对象，让锻造结果可以把几何计算全部写成无分支表达式。
- [BladeData](./BladeData) — 挂在锻造零件上的一块纯数据，描述这片刀身本身；零件的反序列化遇到对应子节点时把它填出来。
- [WeaponComponentData](./WeaponComponentData) — **一把武器形态的完整参数表**。一件物品（斧）可以有好几个形态（一手斧、双持斧、投掷斧），每个形态就是一份这样的数据，由武器组件持有。
- [BasicCharacterObject](./BasicCharacterObject) — 「一个角色」的底层数据载体，与战役状态无关。作为对象基类的派生类，它由对象管理器从角色模板的定义文件加载，**存档里存的是标识引用，读档时按 id 重新加载**。
- [BodyPropertiesJsonConverter](./BodyPropertiesJsonConverter) — 一个只有几十行的转换器派生类。角色体型数据是**结构体**且内部含一个 128 位静态特征包，序列化库对它既没有内建支持也没有可用的无参构造路径，所以要绕开默认行为。
- [DynamicBodyProperties](./DynamicBodyProperties) — 角色体型数据的动态那一半：年龄、体重、体型这类每局都在变、需要在界面里拖动滑条、并且要存进存档的量。
- [StaticBodyProperties](./StaticBodyProperties) — 角色体型数据的静态那一半，也是角色「长什么样」的最终载体：**8 个无符号长整数拼成 128 位指纹**，每一位对应一个脸型特征组的子项。
- [BannerEffect](./BannerEffect) — 71 行、一个密封类、一条私有数组：三级旗帜各一个百分比加成。它继承属性对象，因而是有标识的可寻址数据对象；但它自己没有反序列化，数值只能通过初始化写入。

**游戏模型与状态**

- [GameModel](./GameModel) — 游戏模型层的标记基类，`GameModelsManager` 靠它做类型过滤，mod 的自定义模型全部继承它。
- [GameModelsManager](./GameModelsManager) — 模型集合的持有者，构造时快照一批 `GameModel`，按类型倒序查找并返回最后一个匹配项。
- [GameStateManager](./GameStateManager) — 状态栈管理器，维护有序 `GameState` 列表，负责 push/pop/clean 时的停用、终结、激活与回调广播。
- [Game](./Game) — 一次游戏会话的根对象，持有 `MBObjectManager`、`GameStateManager`、`GameTextManager` 与 `GameHandler` 集合，自身就是存档根类型。
- [GameManagerBase](./GameManagerBase) — 一局游戏的驱动骨架，组件容器加七步加载状态机，把 Tick 和网络事件广播给所有组件与 `Game`。
- [IGameStarter](./IGameStarter) — 整个接口只有 19 行、三个成员，但它决定了全部可替换逻辑的装配方式：游戏启动时造出一个启动器实例，每个子模块把自己的初始化挂上来，最后由派生类把它们串成真正的启动流程。
- [GameState](./GameState) — 212 行、一个抽象基类，定义了游戏界面状态的生命周期契约。所有「打开某个界面」的需求最后都落在这里；改一个界面的行为，实现它对应的处理器接口而不是改状态类本身。
- [EventManager](./EventManager) — 游戏里最小也最容易被误用的一个组件：一个按类型索引的字典字段加五个公开方法。语义只有一句——以事件类型为键存一串回调，触发时按键取出并逐个调用。
- [FaceGen](./FaceGen) — 外观系统唯一的入口，**自身不含任何逻辑**：每个公开方法都是取静态实例，非空就转发，为空就返回一个兜底值。真正的实现在战斗程序集下的另一个同名类型里。
- [DefaultSkills](./DefaultSkills) — 312 行、一个**不是静态类的静态门面**：表面上是十八个技能定义对象的静态属性，取的是技能对象本身而不是数值。
- [Monster](./Monster) — 1008 行、89 个公开成员，是外观生成层与渲染 / 物理层之间的中间表示。它描述的不是「一个种族」也不是「一段动画」，而是**一个可实例化的身体模板**：一具骨骼、一套碰撞胶囊、一个动作集代码。
- [SkeletonScale](./SkeletonScale) — 116 行、七个属性、两个方法，描述「一具骨骼的哪些骨头要缩放、缩放多少」：一个是骑手坐骨的向量缩放，另一个是按骨名逐根缩放的数组。

**UI 与参数**

- [ViewModel](./ViewModel) — UI 视图模型基类，按名称暴露属性并给绑定引擎提供反射式读写与命令派发。
- [BindingPath](./BindingPath) — UI 绑定路径，按反斜杠分段的对象属性路径，支持切分、归约 `..`、拼接与前缀相关性判断。
- [InformationManager](./InformationManager) — 纯静态的信息通道，所有方法都是对一组静态事件的无条件转发：UI 侧订阅，逻辑侧调用。
- [ParameterContainer](./ParameterContainer) — 字符串键值参数袋，启动参数、XML 覆写值、平衡性数字的统一载体，提供各数值类型的强类型取值。
- [EventBase](./EventBase) — 事件系统的事件类型标记基类，`EventManager` 只接受继承自它的类型作为注册与触发键，类本身零成员。

**集合与容器**

- [MBList](./MBList) — 32 行、一个类头、四个构造器、**零个自有成员**。全部行为都来自基类链条；名字里那个「ReadOnly」是误导，中间那层并没有真的限制写入。

## 尚未撰写的部分

上面 47 个类型出自本桶 461 个 public 顶层类型（按权威映射现算：命名空间硬过滤 → 最长前缀匹配 → 入口类型覆写），**剩下 414 个没有页面**。这个桶是全站最大的缺口，下面只列 mod 作者最可能去查的一批，其余类型要么是内部实现、要么是 `enum`、要么落别处去查：

- 游戏流程与加载：`GameType`、`GameHandler`、`GameManagerComponent`、`GameStateManagerType`、`MBSaveLoad`、`SaveableCoreTypeDefiner`
- 物品与部件体系：`RefiningFormula`
- 装备与外观：`CharacterObject`、`Property`、`DrivenProperty`、`PropertyOwner`
- 身体与外观部件：（本组 4 个类型 `DynamicBodyProperties`、`StaticBodyProperties`、`FaceGen`、`BodyPropertiesJsonConverter` 均已撰页）
- 随机、异常与通用工具：`MBRandom`、`MBFastRandom`、`MBPerlin`、`MBUtil`、`FilePaths`、`XmlHelper`、`Timer`、`GameText`、`GameTextManager`
- `TaleWorlds.Library` 数学与集合：`Vec2`、`Vec3`、`Mat2`、`Mat3`、`Quaternion`、`Transformation`、`Color`、`MBReadOnlyList`、`MBBindingList`、`MBArrayList`、`MBMath`、`StackArray`
- `TaleWorlds.Library` 平台与工具：`Debug`、`IDebugManager`、`ApplicationVersion`、`FileHelper`、`IHttpDriver` / `DotNetHttpDriver`、`PathFinder`、`AssemblyLoader`
- `TaleWorlds.DotNet` 互操作：`ManagedObject`、`DotNetObject`、`Managed`、`NativeArray`、`NativeString`、`GameApplicationDomainController`、`ICallbackManager`

想确认某个类型实际落在哪个桶，见 [模块地图](../../architecture/module-map)。这些类型大多只在「读官方实现找写法」时才需要，遇到具体任务再去查对应源码目录即可。

## 导航

- ↑ 上一级：[API 参考](../)
- ↑↑ 语言根：[zh](../../)
- ↑↑↑ 版本首页：v1.4.6
- ↔ 兄弟桶：[core](../core/MBSubModuleBase)（模块入口） · [campaign](../campaign/Campaign)（战役世界） · [mission](../mission/Mission)（一场战斗）
- ↔ 跨版本：[版本总览](../../../../versions/)