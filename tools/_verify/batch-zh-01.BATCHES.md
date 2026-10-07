# batch-zh-01 分片指派（worker-57 生成 · 事实表已机器核过 decl_line）

每片互不相交。片号 = 批次序号。事实表全量：`tools/_verify/batch-zh-01.FACTS.tsv`

## BATCH 0  （6 页）

| page | ver | 源文件 | 声明行 | 首条风险（取自该页风险小节） |
|---|---|---|---|---|
| content/v1.3.0/zh/api/core-extra/ActionSetCode.md | v1.3.0 | TaleWorlds.Core/ActionSetCode.cs | TaleWorlds.Core/ActionSetCode.cs:6 | 名字对不上资源不会报错。 `GenerateActionSetNameWithSuffix` 只拼字符串，不查动画数据库。拼出一个不存在的动作集名 → agent 站在原地或回退默认动作，没有任何异常、任何日志。自定义后缀时先在资源里确认名字。 |
| content/v1.3.0/zh/api/core-extra/AgentAttackType.md | v1.3.0 | TaleWorlds.Core/AgentAttackType.cs | TaleWorlds.Core/AgentAttackType.cs:6 | 枚举顺序是 ABI，不能动。 它注册成了引擎结构体 `Agent_attack_type`，原生层按整数值读。插入一个成员在中间就会同时错乱托管与原生两侧。跨版本新增成员只能追加在 `Count` 之前——而 `Count` 本身就是个假哨兵，永远不会有人真的分配数组，所以实际后果可控，但这不改变「别重排」这条规则。 |
| content/v1.3.0/zh/api/core-extra/AgentControllerType.md | v1.3.0 | TaleWorlds.Core/AgentControllerType.cs | TaleWorlds.Core/AgentControllerType.cs:6 | setter 有 11 个副作用，改一次控制权不是改一个字段。 最容易踩的三条：变成 `Player` 会重挂编队（从 `_detachment` 移除再 `AttachUnit`）；变成 `Player` 会设 `Mission.MainAgent`（全局单例，被多方抢就会互相覆盖）；变成 `Player` 会加 `AgentFlag.CanRide` 且这个标志只加不减（`|=` 无对应的清除分支）。 |
| content/v1.3.0/zh/api/core-extra/AgentData.md | v1.3.0 | TaleWorlds.Core/AgentData.cs | TaleWorlds.Core/AgentData.cs:6 | `Race(int)` 有官方 bug：置错了标志位。 它的实现是 `this.AgentRace = race; this.GenderOverriden = true; return this;` ——没有 `RaceOverriden` 这个字段。后果：`.Race(3)` 之后 `GenderOverriden` 变成 `true` 而 `AgentIsFemale` 保持原值，下游读到「性别被覆盖」但读到的是未覆盖的值。这个 … |
| content/v1.3.0/zh/api/core-extra/AgentFlag.md | v1.3.0 | TaleWorlds.Core/AgentFlag.cs | TaleWorlds.Core/AgentFlag.cs:7 | XML 属性名 = 枚举成员名，改名会静默失效。 `Monster.cs` 的循环是 `xmlNode3.Attributes[agentFlag.ToString()]`——从枚举出发找属性。你改了枚举名，旧 XML 里的属性名就再也匹配不上，不抛异常、不报警告，那个能力直接消失。派生 mod 加新位时也要明白：你的位名会要求你自带新的 XML。 |
| content/v1.3.0/zh/api/core-extra/AgentMovementMode.md | v1.3.0 | TaleWorlds.Core/AgentMovementMode.cs | TaleWorlds.Core/AgentMovementMode.cs:7 | `MovementMode` 只读，想改只能改源头。 `Agent.MovementMode` 只有 `get`，没有 `set`。要改介质得改地形（把 agent 挪进水里）或走原生接口——托管层没有任何写入路径。`SetAgentFlags` 那套玩法在这里用不了。 |

## BATCH 1  （6 页）

| page | ver | 源文件 | 声明行 | 首条风险（取自该页风险小节） |
|---|---|---|---|---|
| content/v1.3.0/zh/api/core-extra/AgentOriginUtilities.md | v1.3.0 | TaleWorlds.Core/AgentOriginUtilities.cs | TaleWorlds.Core/AgentOriginUtilities.cs:6 | 区间判断绑死 `WeaponClass` 的编号。 `weaponClass - WeaponClass.OneHandedPolearm > 2` 依赖 `OneHandedPolearm`、`TwoHandedPolearm`、`LowGripPolearm` 在枚举里恰好连续。官方把 `LowGripPolearm`(11) 和 `TwoHandedPolearm`(10) 放在 `OneHandedPolearm`(9) 之后、… |
| content/v1.3.0/zh/api/core-extra/AgentSaveData.md | v1.3.0 | TaleWorlds.Core/AgentSaveData.cs | TaleWorlds.Core/AgentSaveData.cs:9 | 这是官方内部结构体，不是扩展点。 全树唯一的 `new AgentSaveData(...)` 在 `CheckpointMissionLogic.RegisterAgent`。你可以照着它的形状造自己的存档结构，但别指望改本类型的字段去满足你的需求——改了会同时破坏官方检查点机制和旧档兼容。 |
| content/v1.3.0/zh/api/core-extra/AgentState.md | v1.3.0 | TaleWorlds.Core/AgentState.cs | TaleWorlds.Core/AgentState.cs:6 | `OnAgentRemoved` 的参数只可能是 3 个值，但 `switch` 不写 `default` 会留下空洞。 官方 `BattleObserverMissionLogic` 写了 `default: throw`。你自己写 `switch` 时若省略 `default`，将来若引擎多派发一个值，你会静默什么都不做——这通常比抛异常更难查。 |
| content/v1.3.0/zh/api/core-extra/BodyProperties.md | v1.3.0 | TaleWorlds.Core/BodyProperties.cs | TaleWorlds.Core/BodyProperties.cs:12 | 三处默认值不一致。 `Default` 是 20/0/0，`FromXmlNode` 是 30/0.5/0.5，私有常量 `DefaultAge`/`DefaultWeight`/`DefaultBuild` 也是 30/0.5/0.5。「默认外观」在不同代码路径下不是同一个东西。 |
| content/v1.3.0/zh/api/core-extra/Color.md | v1.3.0 | TaleWorlds.Library/Color.cs | TaleWorlds.Library/Color.cs:8 | `GetHashCode()` 直接返回 `base.GetHashCode()`。 这是基于对象身份的哈希，不是基于值的。对结构体来说这是明确的错误用法——两个相等的 `Color` 放进 `Dictionary` 会变成两个独立的键。绝对不要把 `Color` 作为 `Dictionary`/`HashSet` 的键，也不要用它去实现任何基于哈希的容器。相关的 [Vec2](../Vec2) 和 [Vec3](../Vec3) 虽然… |
| content/v1.3.0/zh/api/core-extra/DefaultSkills.md | v1.3.0 | TaleWorlds.Core/DefaultSkills.cs | TaleWorlds.Core/DefaultSkills.cs:7 | `Game.Current` 之前读任何静态属性都 NRE。 18 个 getter 全走 `Game.Current.DefaultSkills`。在静态构造器、`MBSubModuleBase` 的早期钩子、或任何早于 `Game.InitializeDefaultGameObjects()` 的时刻读 `DefaultSkills.OneHanded` 都会崩。 需要提前用就把引用缓存到你自己的静态字段里，但要缓存到 `Initi… |

## BATCH 2  （6 页）

| page | ver | 源文件 | 声明行 | 首条风险（取自该页风险小节） |
|---|---|---|---|---|
| content/v1.3.0/zh/api/core-extra/EntitySystem.md | v1.3.0 | TaleWorlds.Core/EntitySystem.cs | TaleWorlds.Core/EntitySystem.cs:9 | `GetComponent` 返回「第一个」不是「最新的」。 `_componentsOfTypes[type]` 是 `List`，`Add` 顺序 = 注册顺序，`GetComponent` 取 `list[0]`。同类型注册两次，你只会拿到第一次的实例。这跟 [GameModel](../GameModel) 体系的倒序 `GetGameModel<T>()`（后者赢）方向相反，从 model 体系转过来的人几乎必踩。 |
| content/v1.3.0/zh/api/core-extra/Equipment.md | v1.3.0 | TaleWorlds.Core/Equipment.cs | TaleWorlds.Core/Equipment.cs:13 | 写槽完全不校验。 `this[int]` 的 setter 调了 `IsItemFitsToSlot` 却丢弃返回值，`AddEquipmentToSlotWithoutAgent` 同理。形配失败只在 `DeserializeNode` 里以 `Debug.FailedAssert` 形式出现，而发布版的 `FailedAssert` 不中断加载，于是「断言日志 + 静默少一件装备」。写槽前自己调一次 `IsItemFitsToSlo… |
| content/v1.3.0/zh/api/core-extra/Game.md | v1.3.0 | TaleWorlds.Core/Game.cs | TaleWorlds.Core/Game.cs:15 | `Game.Current` 为 null 就崩。 它在游戏未启动、读档前、以及 `Destroy` 之后都是 `null`。任何一行 `Game.Current.Something` 都是裸奔。 |
| content/v1.3.0/zh/api/core-extra/GameModel.md | v1.3.0 | TaleWorlds.Core/GameModel.cs | TaleWorlds.Core/GameModel.cs:6 | 零成员，零抽象成员。 「派生 `GameModel` 要实现什么」——什么都不用。它是 `abstract` 所以不能 `new`，但仅此而已。不要指望从它身上读出任何行为契约，行为契约在每个 `XxxModel` 抽象类里各自声明（[AgeModel](../../campaign/AgeModel) 的 7 个年龄属性、[ItemValueModel](../ItemValueModel) 的 `CalculateValue` / … |
| content/v1.3.0/zh/api/core-extra/GameModelsManager.md | v1.3.0 | TaleWorlds.Core/GameModelsManager.cs | TaleWorlds.Core/GameModelsManager.cs:8 | `GetGameModel<T>()` 返回 `null` 而不是抛异常。 这是本类最容易踩的坑。官方 144 个槽位由沙盒/故事模式保证填充，你新加的没人管。对值类型派生更糟：`default(T)` 是 0，后面静默算错。要么判空，要么在自己的管理器里对必需槽位做构造期断言。 |
| content/v1.3.0/zh/api/core-extra/GameStateManager.md | v1.3.0 | TaleWorlds.Core/GameStateManager.cs | TaleWorlds.Core/GameStateManager.cs:9 | `PopState(level)` 弹出不存在的 level 会抛 `ArgumentOutOfRangeException`。 `OnPopState` 里是 `int index = this._gameStates.FindLastIndex(...); GameState gameState = this._gameStates[index];`——`-1` 直接索引。必须记住自己 push 时用的 level。 这个异常会从队… |

## BATCH 3  （6 页）

| page | ver | 源文件 | 声明行 | 首条风险（取自该页风险小节） |
|---|---|---|---|---|
| content/v1.3.0/zh/api/core-extra/ItemModifier.md | v1.3.0 | TaleWorlds.Core/ItemModifier.cs | TaleWorlds.Core/ItemModifier.cs:11 | `Equals(ItemModifier)` 没有 `override`。 它是重载而非覆写。这意味着 `(object)a == (object)b`、把两个 `ItemModifier` 放进 `HashSet<ItemModifier>` 或以 `object` 为键的字典时，走的是引用比较。而 `GetHashCode` 却真的按 `StringId` 算——哈希与相等语义不一致，可能导致 `HashSet` 行为反直觉。要比较… |
| content/v1.3.0/zh/api/core-extra/MBBindingList.md | v1.3.0 | TaleWorlds.Library/MBBindingList.cs | TaleWorlds.Library/MBBindingList.cs:9 | `IsOrdered` 用 `== 1` 而不是 `> 0`，这是一个真实的坑。 循环体是 `if (comparer.Compare(this._list[i - 1], this._list[i]) == 1) return false;`。`IComparer<T>.Compare` 的契约只保证「大于时返回正数」，不保证正好是 1。`Comparer<string>.Default` 返回 -1/0/1 没问题，但自定义比较器常… |
| content/v1.3.0/zh/api/core-extra/MBList.md | v1.3.0 | TaleWorlds.Library/MBList.cs | TaleWorlds.Library/MBList.cs:7 | `MBReadOnlyList<T>` 并不只读。 这是本页最容易造成实际损失的一点。签名写着 `MBReadOnlyList<T>`、变量名带 ReadOnly、参数名叫 `inputComponents`，但类型继承自 `List<T>`，`Add`/`RemoveAt`/`Clear` 全部可用。看到 `MBReadOnlyList<T>` 就假定不能改，会写出静默污染共享状态的 bug。 想真正只读必须自己拷贝。 |
| content/v1.3.0/zh/api/core-extra/MBMath.md | v1.3.0 | TaleWorlds.Library/MBMath.cs | TaleWorlds.Library/MBMath.cs:8 | `PI` 是 `float` 不是 `double`。 `MBMath.PI = 3.1415927f` 只有约 7 位有效数字，而 `Math.PI` 有 16 位。混用两者做高精度计算会有可观测的误差累积。引擎内部一致用 `float`，混用 `MathF.PI` / `Math.PI` 会出现细微的角度漂移。 |
| content/v1.3.0/zh/api/core-extra/MBReadOnlyList.md | v1.3.0 | TaleWorlds.Library/MBReadOnlyList.cs | TaleWorlds.Library/MBReadOnlyList.cs:7 | 没有运行期只读保护。 这是最需要记住的一条。任何一次 `(List<T>)readOnlyList` 转型或通过 `List<T>` 变量接收，都会绕开全部「只读」承诺。引擎自身从不这么做，但它无法阻止 mod 这么做。把它当护栏用是危险的。 |
| content/v1.3.0/zh/api/core-extra/MBStringBuilder.md | v1.3.0 | TaleWorlds.Library/MBStringBuilder.cs | TaleWorlds.Library/MBStringBuilder.cs:8 | `ToString()` 静默返回 `null`，不抛异常。 这是本类最高危的一点，因为触发它的写法看起来完全无害：`$"Name: {mbStringBuilder}"`、`string.Format("{0}", mbStringBuilder)`、`sb + someMBStringBuilder`、`TextObject` 的构造重载如果接受 `object` 就会隐式调它。正式版里 `Debug.DebugManager` 为… |

## BATCH 4  （6 页）

| page | ver | 源文件 | 声明行 | 首条风险（取自该页风险小节） |
|---|---|---|---|---|
| content/v1.3.0/zh/api/core-extra/PropertyOwner.md | v1.3.0 | TaleWorlds.Core/PropertyOwner.cs | TaleWorlds.Core/PropertyOwner.cs:11 | 写 0 是删除，不是写零。 这是本页最重要的一条。任何「把属性值设为 0」的代码路径，副作用是把这个键从字典里摘掉。后果包括：`GetProperties()` 少一项、序列化输出少一行、以及——如果你有基于键存在性做判断的逻辑——行为翻转。 |
| content/v1.3.0/zh/api/core-extra/SkillObject.md | v1.3.0 | TaleWorlds.Core/SkillObject.cs | TaleWorlds.Core/SkillObject.cs:8 | `sealed`，不可继承。 `public sealed class SkillObject : PropertyObject`——写不了 `MySkillObject : SkillObject`。自定义技能只能是 `SkillObject` 本体，额外字段请外挂到静态字典、`XxxModel` 或关联的 `SkillEffect` 上。 |
| content/v1.3.0/zh/api/core-extra/Vec2.md | v1.3.0 | TaleWorlds.Library/Vec2.cs | TaleWorlds.Library/Vec2.cs:8 | 角度约定与数学惯例相反。 零度是 +Y，正角是顺时针。`Vec2.FromRotation(MathF.PI)` 得到 `(0, -1)`（朝南），不是 `(-1, 0)`（朝西）。从别的库抄旋转公式过来一定要先转坐标：`mathAngle = MBMath.PI / 2f - engineAngle`。 |
| content/v1.3.0/zh/api/core-extra/Vec3.md | v1.3.0 | TaleWorlds.Library/Vec3.cs | TaleWorlds.Library/Vec3.cs:9 | `w` 被几乎所有数学运算忽略，包括 `Equals` 和 `GetHashCode`。 `Equals` 是 `((Vec3)obj).x == this.x && ((Vec3)obj).y == this.y && ((Vec3)obj).z == this.z`——没有 `w`。`GetHashCode` 是 `(int)(1001f * x + 10039f * y + 117f * z)`，也没有。所以 `new Vec3(… |
| content/v1.3.0/zh/api/core-extra/WeaponComponent.md | v1.3.0 | TaleWorlds.Core/WeaponComponent.cs | TaleWorlds.Core/WeaponComponent.cs:10 | `PrimaryWeapon` 不判空。 `_weaponList[0]` 在空列表上抛 `ArgumentOutOfRangeException`。`new WeaponComponent(item)` 之后、`AddWeapon` 之前，读 `PrimaryWeapon` 或 `GetItemType()` 都会炸。先加武器再读。 |
| content/v1.3.0/zh/api/core-extra/WeaponDesign.md | v1.3.0 | TaleWorlds.Core/WeaponDesign.cs | TaleWorlds.Core/WeaponDesign.cs:11 | `UsedPieces` 长度必须 >= 3。 `CalculateHolsterShiftAmount()` 里 `this.UsedPieces[2]` 无判空。长度 2 或更短 → 构造器抛 `IndexOutOfRangeException`。这与 `UsedPieces[1]` 做了判空形成刺眼的不对称。 |

## BATCH 5  （6 页）

| page | ver | 源文件 | 声明行 | 首条风险（取自该页风险小节） |
|---|---|---|---|---|
| content/v1.3.0/zh/api/mission-ext/ActionCodeType.md | v1.3.0 | TaleWorlds.MountAndBlade/Agent.cs | TaleWorlds.MountAndBlade/Agent.cs:6546 | `GetCurrentActionType` 报的是什么就转什么，没有范围检查。 `MBAPI.IMBAgent.GetCurrentActionType` 返回 native 的 `int`，托管层直接 `(Agent.ActionCodeType)` 强转。native 侧若返回了不在 0..53 里的值，你拿到的是一个「不存在的码」，而枚举比较不会报错——所有 `==` 都是 false，静默走进「都不是」那条分支。要防这一点就显… |
| content/v1.3.0/zh/api/mission-ext/ActionOptionData.md | v1.3.0 | TaleWorlds.MountAndBlade/Options/ActionOptionData.cs | TaleWorlds.MountAndBlade/Options/ActionOptionData.cs:7 | managed 构造器在 1.3.0 到 1.5.3 全程有缺陷。 `_nativeType` 漏赋 → `IsNative()` 误报 `true`、`GetOptionType()` 返回 `MasterVolume`、传入的 `ManagedOptionsType` 被吞。不要用它。 |
| content/v1.3.0/zh/api/mission-ext/ActionStage.md | v1.3.0 | TaleWorlds.MountAndBlade/Agent.cs | TaleWorlds.MountAndBlade/Agent.cs:6354 | 枚举和 `int` 不能直接比较。 `stage == 2` 编译失败。网上或反编译产物里的数字字面量写法必须换成 `Agent.ActionStage.AttackRelease`。`SandboxAutoBlockModel` 那份反编译产物（`== null || == 1 || == 2`）就是这类不能照抄的代码。 |
| content/v1.3.0/zh/api/mission-ext/AddPlayersResult.md | v1.3.0 | TaleWorlds.MountAndBlade/GameNetwork.cs | TaleWorlds.MountAndBlade/GameNetwork.cs:1771 | `NetworkPeers` 永远非 null，但失败时全 null。 这是本结构最容易造成 NRE 的地方。判 `result.NetworkPeers != null` 来防 NRE 是无效的——要判 `Success`，再判元素。 |
| content/v1.3.0/zh/api/mission-ext/AdvanceVisualOrder.md | v1.3.0 | TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/ViewModelCollection/Order/Visual/Default/Orders/MovementOrders/AdvanceVisualOrder.cs | TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/ViewModelCollection/Order/Visual/Default/Orders/MovementOrders/AdvanceVisualOrder.cs:7 | 基类 `VisualOrder` 与参数类型 `VisualOrderExecutionParameters` 不在 1.3.0 源码树里。 上面写的签名都是从本文件的 override 声明里读出来的，字面正确；但基类还有哪些成员、这些 override 之外的调用时机如何，只能从同目录的其他 8 个 `*VisualOrder` 派生类反推。写代码前请先在 ILSpy 里打开 `TaleWorlds.MountAndBlade.Vi… |
| content/v1.3.0/zh/api/mission-ext/AgentApplyDamageModel.md | v1.3.0 | TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs | TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs:8 | `CalculateDamage` 非 `virtual`。 写 `public override float CalculateDamage(...)` 编译不过。要改行为就改四个钩子。 |

## BATCH 6  （6 页）

| page | ver | 源文件 | 声明行 | 首条风险（取自该页风险小节） |
|---|---|---|---|---|
| content/v1.3.0/zh/api/mission-ext/AgentBuildData.md | v1.3.0 | TaleWorlds.MountAndBlade/AgentBuildData.cs | TaleWorlds.MountAndBlade/AgentBuildData.cs:9 | `AgentCharacter` 为 null 会抛 `MBNullParameterException`。 `SpawnAgent` 的第一件事就是 `if (agentCharacter == null) throw new MBNullParameterException("npcCharacterObject");`——注意异常消息里的参数名是硬编码的 `npcCharacterObject`，即使你传的是 `BasicChar… |
| content/v1.3.0/zh/api/mission-ext/AgentCapsuleData.md | v1.3.0 | TaleWorlds.MountAndBlade/AgentCapsuleData.cs | TaleWorlds.MountAndBlade/AgentCapsuleData.cs:7 | 纯数据，无行为。 构造完它的全部作用就是被 `ref` 递给 native。留着它当长期状态没有任何意义。 |
| content/v1.3.0/zh/api/mission-ext/AgentCommonAILogic.md | v1.3.0 | TaleWorlds.MountAndBlade/AgentCommonAILogic.cs | TaleWorlds.MountAndBlade/AgentCommonAILogic.cs:7 | `OnAgentCreated` 不去重。 官方已经注册了 `AgentCommonAILogic` 的前提下，你再 `new CommonAIComponent(agent)` + `AddComponent`，会有两个组件同时 tick，而 [CommonAIComponent](../CommonAIComponent) 的 `Morale` 各自独立——士气会被分裂成两份。先查 `agent.CommonAIComponent … |
| content/v1.3.0/zh/api/mission-ext/AgentComponent.md | v1.3.0 | TaleWorlds.MountAndBlade/AgentComponent.cs | TaleWorlds.MountAndBlade/AgentComponent.cs:8 | `Agent.Components` 返回 `MBReadOnlyList<AgentComponent>`，而 `MBReadOnlyList<T>` 继承 `List<T>`。 所以 `foreach (var c in affectedAgent.Components)` 是真实的 `List<T>` 枚举器——在遍历中 `AddComponent` / `RemoveComponent` 会抛 `InvalidOperation… |
| content/v1.3.0/zh/api/mission-ext/AgentController.md | v1.3.0 | TaleWorlds.MountAndBlade/AgentController.cs | TaleWorlds.MountAndBlade/AgentController.cs:6 | 没有 tick 钩子。 这是它和 [AgentComponent](../AgentComponent) 的根本差别。想每帧执行必须自己在 `OnInitialize` 里订阅别的回调来源；只写 `OnInitialize` 的控制器在挂上之后就是一块静止的状态。 |
| content/v1.3.0/zh/api/mission-ext/AgentDecideKilledOrUnconsciousModel.md | v1.3.0 | TaleWorlds.MountAndBlade/ComponentInterfaces/AgentDecideKilledOrUnconsciousModel.cs | TaleWorlds.MountAndBlade/ComponentInterfaces/AgentDecideKilledOrUnconsciousModel.cs:7 | `IAgentStateDecider` 旁路会完全绕过模型。 `Mission.GetAgentState` 的 `using` 块遇到第一个 [IAgentStateDecider](../IAgentStateDecider) 就 `break`。它仍然收到你的 `deathProbability` 作为参数，但最终状态由它决定。「我的模型怎么没生效」的第一个排查点就是这个。 |

## BATCH 7  （6 页）

| page | ver | 源文件 | 声明行 | 首条风险（取自该页风险小节） |
|---|---|---|---|---|
| content/v1.3.0/zh/api/mission-ext/AgentDrivenProperties.md | v1.3.0 | TaleWorlds.MountAndBlade/AgentDrivenProperties.cs | TaleWorlds.MountAndBlade/AgentDrivenProperties.cs:8 | `DrivenProperty.Count = 93` 必然越界。 数组长 93、有效下标 0..92。`GetStat(Count)` / `SetStat(Count, x)` 抛 `IndexOutOfRangeException`。任何 `for (int i = 0; i <= (int)DrivenProperty.Count; i++)` 的循环都是错的。 |
| content/v1.3.0/zh/api/mission-ext/AgentHumanAILogic.md | v1.3.0 | TaleWorlds.MountAndBlade/AgentHumanAILogic.cs | TaleWorlds.MountAndBlade/AgentHumanAILogic.cs:7 | `OnAgentCreated` 不去重。 官方已注册时你再挂一次会有两个 `HumanAIComponent` 同时 tick。先查 `agent.HumanAIComponent != null`。 |
| content/v1.3.0/zh/api/mission-ext/AgentLastHitInfo.md | v1.3.0 | TaleWorlds.MountAndBlade/Agent.cs | TaleWorlds.MountAndBlade/Agent.cs:6212 | 它没有任何公开的读出入口。 `Agent._lastHitInfo` 是 private 字段，`Agent` 上没有 `LastHitInfo` 属性、没有 `CanOverrideBlow` 的转发方法。mod 拿不到挂在真 Agent 上的这个结构，只能观察它造成的结果（击杀归属、队友击杀判定）。你唯一能合法持有的实例是自己 new 出来的副本。想读真 Agent 的那一份，得靠 Harmony 打补丁——那不是本 API 的能力… |
| content/v1.3.0/zh/api/mission-ext/AgentList.md | v1.3.0 | TaleWorlds.MountAndBlade/Missions/AgentList.cs | TaleWorlds.MountAndBlade/Missions/AgentList.cs:7 | 「ReadOnly」不成立。 `MBReadOnlyList<T>` 直接继承 `List<T>`，链上没有任何写保护。`mission.Agents.Clear()` 会编译通过、会执行成功、会直接破坏 [Mission](../../mission/Mission) 的内部遍历。永远把它当只读用，靠自律而不是靠类型。 |
| content/v1.3.0/zh/api/mission-ext/AgentMovementLockedState.md | v1.3.0 | TaleWorlds.MountAndBlade/AgentMovementLockedState.cs | TaleWorlds.MountAndBlade/AgentMovementLockedState.cs:8 | 它不是位标志。 `PositionLocked | FrameLocked` 能编译但值 3 无意义。`Enum.HasFlag` 在这里语义错误。要写 `(state & AgentMovementLockedState.X) != 0` 只会得到误导性的结果——按真实形状，正确的写法就是 `state == AgentMovementLockedState.X`（见上面的 `Agent.cs:4940-4948` 那一串比较，全是相… |
| content/v1.3.0/zh/api/mission-ext/AgentPathNavMeshChecker.md | v1.3.0 | TaleWorlds.MountAndBlade/Source/Objects/Siege/AgentPathNavMeshChecker.cs | TaleWorlds.MountAndBlade/Source/Objects/Siege/AgentPathNavMeshChecker.cs:8 | 构造器零校验。 `mission` 为 null 会在第一次 `Tick` 的 `this._mission.CurrentTime` 上 NRE；`navMeshId` 传错值会让第一条判定路径永不命中；`radiusToCheck` 传 0 会让贴近判定退化成「距离严格小于 0」即永不命中。 |

## BATCH 8  （6 页）

| page | ver | 源文件 | 声明行 | 首条风险（取自该页风险小节） |
|---|---|---|---|---|
| content/v1.3.15/zh/api/core-extra/Banner.md | v1.3.15 | TaleWorlds.Core/Banner.cs | TaleWorlds.Core/Banner.cs:10 | 空表越界：`new Banner()` 造出的旗 `_bannerDataList` 为空。任何 `GetPrimaryColorId`、`GetBackgroundMeshId`、`GetIconColorId`、`GetIconSize` 等都会 `IndexOutOfRangeException`。务必先 `AddIconData` 或 `Deserialize` 填充，或用工厂方法。 |
| content/v1.4.5/zh/api/core-extra/AgentAttackType.md | v1.4.5 | TaleWorlds.Core/TaleWorlds.Core/AgentAttackType.cs | TaleWorlds.Core/TaleWorlds.Core/AgentAttackType.cs:3 | 不是位标志集。 源码里没有 `[Flags]`，`DefineAsEngineStruct` 的第三个参数也是 `false`。`AgentAttackType.Standard | AgentAttackType.Kick` 会得到 `Kick`（因为 `Standard == 0`），用它做组合判断必然出错。 |
| content/v1.4.5/zh/api/core-extra/AgentControllerType.md | v1.4.5 | TaleWorlds.Core/TaleWorlds.Core/AgentControllerType.cs | TaleWorlds.Core/TaleWorlds.Core/AgentControllerType.cs:3 | 写 `Player` 有五重副作用，不是设个属性那么简单。 `Agent.Controller` 的 setter 会动编队、`Mission.MainAgent`、`CanRide` 能力位、速度上限与编队回调。频繁切换会撕裂编队状态。 |
| content/v1.4.5/zh/api/core-extra/AgentMovementMode.md | v1.4.5 | TaleWorlds.Core/TaleWorlds.Core/AgentMovementMode.cs | TaleWorlds.Core/TaleWorlds.Core/AgentMovementMode.cs:6 | `HasAnyFlag(Land)` 在潜水时为真。 `WaterDiving`(3) 的低位包含 `Land`(1)。仓库里 `Agent.cs:2660` 就是这么写的（`!MovementMode.HasAnyFlag(AgentMovementMode.Land)`），不要照抄。 |
| content/v1.4.5/zh/api/core-extra/AgentSaveData.md | v1.4.5 | TaleWorlds.Core/TaleWorlds.Core/AgentSaveData.cs | TaleWorlds.Core/TaleWorlds.Core/AgentSaveData.cs:7 | 在 1.4.5 托管源码里没有生产者和消费者。 `new AgentSaveData(` 全树命中 0 次；`AgentSaveData` 的所有引用都落在它自己、`AutoGeneratedSaveManager` 与 `SaveableCoreTypeDefiner` 三处。因此 mod 无法从托管侧触发游戏走这条流程。 判断填充 `List<AgentSaveData>` 的代码在哪——做不到，仅凭这份托管源码无法判定它是在 na… |
| content/v1.4.5/zh/api/core-extra/AgentState.md | v1.4.5 | TaleWorlds.Core/TaleWorlds.Core/AgentState.cs | TaleWorlds.Core/TaleWorlds.Core/AgentState.cs:3 | 状态轴没有托管层校验。 `Agent.State` 的 setter 只做「值变了才写」（`Agent.cs:1534`），随后 `MBAPI.IMBAgent.SetStateFlags`。从 `Killed` 或 `Deleted` 写回 `Active` 不会抛异常，你会得到一个状态与动画/物理互相矛盾的单位。这是最容易写出「幽灵单位」的地方。 |

## BATCH 9  （6 页）

| page | ver | 源文件 | 声明行 | 首条风险（取自该页风险小节） |
|---|---|---|---|---|
| content/v1.4.5/zh/api/core-extra/AmbientInformation.md | v1.4.5 | TaleWorlds.Library/TaleWorlds.Library/AmbientInformation.cs | TaleWorlds.Library/TaleWorlds.Library/AmbientInformation.cs:3 | 它是 native 引擎结构的镜像。 `TaleWorlds.Engine/Properties/AssemblyInfo.cs:13` 的 `DefineAsEngineStruct` 是硬证据。托管侧只负责填，数值由引擎消费，你在托管层改字段只是改了一份要交给 native 的输入。 |
| content/v1.4.5/zh/api/core-extra/ApplicationPlatform.md | v1.4.5 | TaleWorlds.Library/TaleWorlds.Library/ApplicationPlatform.cs | TaleWorlds.Library/TaleWorlds.Library/ApplicationPlatform.cs:3 | `Platform.WindowsSteam` 的值是 0。 [Platform](../Platform) 的第二个成员没有显式赋值，编译器给了 0；而 `CurrentPlatform` 没有初始化器。结果：未初始化即读作 WindowsSteam，且 `IsPlatformWindows()` 返回 true。 这是本页最贵的一条。 |
| content/v1.4.5/zh/api/core-extra/ApplicationVersion.md | v1.4.5 | TaleWorlds.Library/TaleWorlds.Library/ApplicationVersion.cs | TaleWorlds.Library/TaleWorlds.Library/ApplicationVersion.cs:9 | `operator<` / `>` / `<=` / `>=` 都不比较 `ChangeSet`，而 `IsOlderThan` 比较。 同一个语义有两套实现且结果不同。跨构建比较必须用 `IsOlderThan` / `IsSame(other, true)`，不能用运算符。 |
| content/v1.4.5/zh/api/core-extra/ApplicationVersionJsonConverter.md | v1.4.5 | TaleWorlds.Library/TaleWorlds.Library/ApplicationVersionJsonConverter.cs | TaleWorlds.Library/TaleWorlds.Library/ApplicationVersionJsonConverter.cs:7 | 输入必须是 JSON 对象。 `ReadJson` 无条件 `JObject.Load(reader)`。如果配置或存档里版本号写成了裸字符串 `"v1.2.3"`，反序列化直接抛 `JsonReaderException`。 |
| content/v1.4.5/zh/api/core-extra/ApplicationVersionType.md | v1.4.5 | TaleWorlds.Library/TaleWorlds.Library/ApplicationVersionType.cs | TaleWorlds.Library/TaleWorlds.Library/ApplicationVersionType.cs:3 | `Release` 不是最后一个成员。 排序键是 `Development`(4) > `Release`(3) > `EarlyAccess`(2) > `Beta`(1) > `Alpha`(0)。因此 `FromString("d1.0.0") > FromString("v9.9.9")` 成立。 用它跟玩家比较版本新旧会得到荒谬的结论。 |
| content/v1.4.5/zh/api/core-extra/AreaInformation.md | v1.4.5 | TaleWorlds.Library/TaleWorlds.Library/AreaInformation.cs | TaleWorlds.Library/TaleWorlds.Library/AreaInformation.cs:3 | 它是 native 引擎结构的镜像。 `TaleWorlds.Engine/Properties/AssemblyInfo.cs:18` 是硬证据。托管侧填、引擎读。 |

## BATCH 10  （5 页）

| page | ver | 源文件 | 声明行 | 首条风险（取自该页风险小节） |
|---|---|---|---|---|
| content/v1.4.5/zh/api/core-extra/AssemblyLoader.md | v1.4.5 | TaleWorlds.Library/TaleWorlds.Library/AssemblyLoader.cs | TaleWorlds.Library/TaleWorlds.Library/AssemblyLoader.cs:7 | 失败会弹模态框。 `:52` 的 `Debug.ShowMessageBox`，`showError` 默认 `true`。无头环境（专用服务器、CI、自动化测试）会直接挂死。 任何非交互场景都必须显式传 `showError: false`。 |
| content/v1.4.5/zh/api/core-extra/AsyncRunner.md | v1.4.5 | TaleWorlds.Library/TaleWorlds.Library/AsyncRunner.cs | TaleWorlds.Library/TaleWorlds.Library/AsyncRunner.cs:3 | 它不是游戏 API，模组侧基本不直接调用。 依据：`grep -rn "AsyncRunner"` 在 1.4.5 托管源码里只命中四类位置——它自己的 10 行、`AwaitableAsyncRunner.cs` 的定义、`TestContext.cs` 的 7 处引用、以及 `AssemblyInfo` 之外无。战斗、campaign、mission 流程里没有任何一处调用它。 |
| content/v1.4.5/zh/api/core-extra/AtmosphereInfo.md | v1.4.5 | TaleWorlds.Library/TaleWorlds.Library/AtmosphereInfo.cs | TaleWorlds.Library/TaleWorlds.Library/AtmosphereInfo.cs:5 | `IsValid` 只看 `AtmosphereName`。 其余九个字段全 0 也不影响判定。「全零大气」是合法的 valid 大气，别用它当数值校验。 |
| content/v1.4.5/zh/api/core-extra/AtmosphereState.md | v1.4.5 | TaleWorlds.Core/TaleWorlds.Core/AtmosphereState.cs | TaleWorlds.Core/TaleWorlds.Core/AtmosphereState.cs:5 | 它是插值的源，不是结果。 `AtmosphereGrid` 读一组它、加权产出另一个它。拿到一个 `AtmosphereState` 并不意味着它是「当前天气」，它只是一个网格采样点。 |
| content/v1.4.5/zh/api/mission-ext/AgentDrivenProperties.md | v1.4.5 | TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentDrivenProperties.cs | TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentDrivenProperties.cs:6 | 98 项固定长度（v1.4.5），下标即契约。 `DrivenProperty` 枚举里 `Count = 98`（v1.4.5）与 `new float[98]` 严格对应。往枚举中间插值会让后面全部错位，症状是数值串位而不是异常。 |

