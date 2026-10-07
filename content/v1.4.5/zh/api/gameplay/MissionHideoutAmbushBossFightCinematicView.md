---
title: "MissionHideoutAmbushBossFightCinematicView"
description: "藏身处伏击过场的相机视图：每帧只做两件事之一（建相机 / 移相机），而相机归属由两个事件回调决定——ReleaseCamera 之后 CustomCamera 被置 null。"
---

# MissionHideoutAmbushBossFightCinematicView

**Namespace:** `SandBox.View.Missions`
**Module:** SandBox
**Type:** `internal class MissionHideoutAmbushBossFightCinematicView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Missions/MissionHideoutAmbushBossFightCinematicView.cs`

## 概述

`MissionHideoutAmbushBossFightCinematicView` 是 200 行、6 个方法的**纯相机视图**。它继承 [MissionView](../../mission-ext/MissionView/)，不画任何 UI、不管任何游戏逻辑——**它只负责在藏身处伏击过场期间接管相机，并把控制权还回去。**

结构是「一个 tick + 两个事件回调」：`OnMissionScreenTick`（`:31-43`）每帧决定是「首次建相机」还是「移动相机」；`InitializeView`（`:190-199`）去任务里取 [HideoutAmbushBossFightCinematicController](../HideoutCinematicAgentInfo/) 并订阅它的两个事件；`OnCinematicStateChanged`（`:155-169`）在进入 `PreCinematic` 时 `SetupCamera()`、进入 `PostCinematic` 时 `ReleaseCamera()`；`OnCinematicTransition`（`:171-188`）只管屏幕淡入淡出。

## 心智模型

把它当成**「一段有借有还的资源」**。三条推论：

第一,**相机是借来的，必须还。** `SetupCamera`（`:62-120`）在 `:119` 把 `_camera` 挂到 `MissionScreen.CustomCamera` 上；`ReleaseCamera`（`:147-153`）在 `:151` 把它置回 `null` 并 `:152` 释放。**顺序是先还引用再释放句柄** —— 反过来会把已释放的相机留在 `CustomCamera` 上。

第二,**`_isInitialized` 是唯一的状态闸门，而且它一次就定生死。** `:34` 判它 → `InitializeView()`（`:36`）；`:38` 判它并检查当前/下一状态是否 `Cinematic` → `UpdateCamera(dt)`（`:40`）。`InitializeView` 的 `:192` 取行为、`:193` 用它的 null 判 `_isInitialized` —— **取不到行为就永久保持未初始化，每帧重试一次 `GetMissionBehavior`**。这是安全的（重试直到行为存在），但**也意味着「行为永远不来」时每帧都会多跑一次取行为的开销**。

第三,**相机朝向不跟随 Boss，而是每帧重新算。** `UpdateCamera`（`:122-145`）每帧 `:139` 用 `_cameraMoveDir * _cameraSpeed * dt` 推进位置，`:140` 重新取 Boss 眼位，`:141-143` 重算朝向。所以 Boss 移动时相机会跟着转，**而不是锁死初始朝向**。

## 如何使用

**怎么拿到它**：**你拿不到它，也不用拿它。** 它是 `internal` 类，且没有任何注册特性——`MissionView` 子类由引擎按类型扫描自动实例化。全树没有 `new MissionHideoutAmbushBossFightCinematicView()`。

对应宿主 controller 的两个事件（本视图订阅的正是它们）：

```csharp
using TaleWorlds.MountAndBlade;

// InitializeView（:196-197）订阅的正是这个 controller 的两个事件：
//   OnCinematicStateChanged  -> 本视图的 OnCinematicStateChanged（:155）
//   OnCinematicTransition   -> 本视图的 OnCinematicTransition（:171）
// controller 是 internal（HideoutAmbushBossFightCinematicController.cs），所以 mod 订阅不到
Debug.Print("相机归属由 controller 的两个事件决定", 0);
```

复现「相机速度」的算法（`:109-112`，这是本视图唯一有算术的地方）：

```csharp
using TaleWorlds.Core;

// :110  float num = innerRadius + outerRadius + 1.5f * walkDistance;
// :111  _cameraSpeed = num / MathF.Max(controller.CinematicDuration, 0.1f);
// 分母用 Max(..., 0.1f) 兜底 —— CinematicDuration 为 0 时速度 = num * 10，不会除零也不会无穷
float innerRadius = 3f, outerRadius = 2f, walkDistance = 4f, duration = 0f;
float total = innerRadius + outerRadius + 1.5f * walkDistance;
float speed = total / MathF.Max(duration, 0.1f);
Debug.Print("total=" + total + "  duration=0 时的 speed=" + speed + "（兜底，非 Infinity）", 0);
```

**用它最容易踩的一条**：**相机在 `PreCinematic` 阶段就建好了，而移动要等到状态变成 `Cinematic`。** `:160-163` 在 `_currentState == PreCinematic` 时就 `SetupCamera()`；而 `:38` 要求 `_currentState == Cinematic || _nextState == Cinematic` 才 `UpdateCamera`。**所以 PreCinematic 那段时间相机是静止的**——若你期待「一进过场就开始运镜」，实际会看到一段静止画面。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_isInitialized` | `private bool _isInitialized` | **唯一的状态闸门。** `:193` 由「controller 是否为 null」赋值一次，此后 `:34`/`:38`/`:157`/`:173` 四处都判它。**它一旦为 true 就永不复位**——控制器中途消失不会让本视图重新初始化。 |
| `_cinematicLogicController` | `private HideoutAmbushBossFightCinematicController _cinematicLogicController` | 被订阅方。`:192` 从 `Mission.GetMissionBehavior<>()` 取。**为 null 时 `:105`/`:106`/`:109`/`:111`/`:140` 全会空引用**——但那些都在 `_isInitialized` 为 true 之后才跑，所以实际安全。 |
| `_camera` | `private Camera _camera` | `Camera.CreateCamera()`（`:95`）产出的句柄。`:99` 从 `MissionScreen.CombatCamera` 拷参数（`:97` 判空、`:102` 有 `FailedAssert`）；`:118`/`:144` 每帧写 `_camera.Frame`；`:152` 释放。**释放后不置 null。** |
| `_cameraFrame` / `_cameraOffset` | `private MatrixFrame _cameraFrame = MatrixFrame.Identity` / `private readonly Vec3 _cameraOffset = new Vec3(0.3f, 0.3f, 1.2f, -1f)` | 相机位姿与偏移。**`_cameraOffset` 是 `readonly` 且带第四个分量 `-1f`**（`:25`）——三轴偏移 + 一个未在 `:114` 之外使用的第四分量。`:114` 用 `s`/`f`/`u` 三个分量做基向量组合，算出相机的实际站位。 |
| `_cameraMoveDir` / `_cameraSpeed` | `private Vec3 _cameraMoveDir = Vec3.Forward` / `private float _cameraSpeed` | 运镜方向与速度。**都由 `SetupCamera` 的 `:111-112` 算出**，不在字段初始化时定值。`:111` 的分母用 `MathF.Max(…, 0.1f)` 兜底防除零。 |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | 覆盖 `MissionView.cs:21`。**三态分支**：`:33` 调基类 → `:34` 未初始化则 `InitializeView()` → `:38` 已初始化**且**用户没有禁用游戏状态**且**当前或下一状态是 `Cinematic` 才 `UpdateCamera(dt)`。**`Game.Current.GameStateManager.ActiveStateDisabledByUser` 这个条件容易被漏读——玩家按暂停时相机就停。** |
| `SetupCamera` | `private void SetupCamera()` | **建相机全流程（`:62-120`）。** `:95` 建句柄 → `:96-104` 拷战斗相机参数 → `:105`/`:106` 取 Boss 与玩家眼位 → `:107-108` 算出两者连线方向 → `:109-111` 算速度 → `:112` 反向 → `:113` 首次定向 → `:114-117` 用 `_cameraOffset` 平移后再定向 → `:118-119` 写帧并挂到 `CustomCamera`。**只在 `PreCinematic` 进入时调一次。** |
| `UpdateCamera` | `private void UpdateCamera(float dt)` | **每帧移动（`:122-145`）。** `:139` 按 `dir * speed * dt` 推进 → `:140` 重取 Boss 眼位 → `:141-143` 重算朝向 → `:144` 写帧。**不碰 `CustomCamera` 绑定**（那是 `SetupCamera` 做的），所以移相机期间绑定不变。 |
| `ReleaseCamera` | `private void ReleaseCamera()` | **还相机（`:147-153`）。** `:150` 把 `CustomCamera.Frame` 同步给自由相机 → `:151` `CustomCamera = null` → `:152` 释放句柄。**顺序不可颠倒。** |
| `OnCinematicStateChanged` | `private void OnCinematicStateChanged(HideoutCinematicState state)` | `:157` 判 `_isInitialized` → `:159` 记 `_currentState` → `:160-163` `PreCinematic` 则建相机 → `:164-167` `PostCinematic` 则还相机。**`Cinematic` 与 `Completed` 在这里什么都不做**（只更新 `_currentState`）。 |
| `OnCinematicTransition` | `private void OnCinematicTransition(HideoutCinematicState nextState, float duration)` | `:173` 判 `_isInitialized` → `:175-185` 按目标状态调 `ScreenFadeController.BeginFadeOut/BeginFadeIn` → `:186` 记 `_nextState`。**两组状态共用一个动作**：`InitialFadeOut`+`PostCinematic` 淡出，`Cinematic`+`Completed` 淡入。**注意它记 `_nextState` 而不记 `_currentState`** —— 与上一个回调分工不同。 |
| `InitializeView` | `private void InitializeView()` | **一次性接线（`:190-199`）。** `:192` 取 controller → `:193` 判 null 定 `_isInitialized` → `:194-198` 非 null 才订阅两个事件。**从未退订**——本类没有 `OnMissionScreenDeactivate` 之类的清理。 |

## 真实示例

相机归属的完整时序（这是本视图唯一值得记住的流程）：

```csharp
// PreCinematic 进入   -> OnCinematicStateChanged(:160)  -> SetupCamera()   借相机（CustomCamera = _camera）
// Cinematic 期间      -> OnMissionScreenTick(:38)        -> UpdateCamera(dt) 每帧推进
// Cinematic 进入/Completed -> OnCinematicTransition(:181)  -> BeginFadeIn(duration)
// InitialFadeOut/PostCinematic -> OnCinematicTransition(:177) -> BeginFadeOut(duration)
// PostCinematic 进入 -> OnCinematicStateChanged(:164)     -> ReleaseCamera() 还相机（CustomCamera = null）
Debug.Print("借 -> 移 -> 还；借还都由 state 事件驱动，不由 tick 驱动", 0);
```

`_cameraOffset` 的四分量与基向量组合（`:114`）：

```csharp
using TaleWorlds.Core;

// _cameraOffset = (0.3f, 0.3f, 1.2f, -1f)（:25，第四分量在 :114 未被使用）
// :114 用 x/y/z 分别乘以 rotation.s / rotation.f / rotation.u 求偏移后的实际站位
Vec3 offset = new Vec3(0.3f, 0.3f, 1.2f, -1f);
Vec3 s = Vec3.Side, f = Vec3.Up, u = Vec3.Forward;
Vec3 shifted = offset.x * s + offset.y * f + offset.z * u;
Debug.Print("偏移后站位 = " + shifted + "（第四分量 -1f 不参与）", 0);
```

## 风险与边界

- **`internal` 类，编译期不可引用。** 且 `MissionView` 子类靠自动实例化，**没有显式注册 API**。
- **相机在 `PreCinematic` 建、在 `Cinematic` 才动。** `:160-163` vs `:38`。**中间那段是静止画面。**
- **`Game.Current.GameStateManager.ActiveStateDisabledByUser` 会冻结运镜。** `:38`。玩家暂停/禁用游戏状态时 `UpdateCamera` 不被调。
- **`ReleaseCamera` 的三步顺序不可颠倒。** `:150` 同步自由相机 → `:151` 置 null → `:152` 释放。**先释放再置 null 会把已释放句柄留在 `MissionScreen.CustomCamera` 上。**
- **从不退订事件。** `InitializeView`（`:196-197`）订阅了 `OnCinematicStateChanged` / `OnCinematicTransition`，**本类没有任何对应的退订代码**（没有 override `OnMissionScreenDeactivate`）。**同一 controller 被再次取到时可能重复订阅。**
- **`_isInitialized` 永不复位。** `:193` 只在 `InitializeView` 里赋值一次。**controller 中途被移除后本视图仍认为已初始化，随后 `:140` 会空引用。**
- **`SetupCamera` 里 `MissionScreen.CombatCamera` 为 null 时只断言不断裂。** `:102` 的 `Debug.FailedAssert` 在发布版不弹窗，`:99` 的 `FillParametersFrom` 被跳过，**相机会带着默认参数继续用。**
- **`_cameraOffset` 的第四分量 `-1f` 在 `:114` 未被使用。** 我确认了它只参与这一个三轴组合，**不断言它是「未使用的遗留字段」**——它可能在别处（如构造器外的序列化）被读。
- **`GetScenePrefabParameters` 的三个出参来自场景预制体。** `:109`。**过场路径写错时相机速度会跟着错，而没有任何告警。**

## 参见

- 基类与契约：[MissionView](../../mission-ext/MissionView/)（`OnMissionScreenTick` `:21`）、[MissionBehavior](../../mission/MissionBehavior/)
- 被订阅的 controller：`bannerlord-1.4.5/Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Hideout/HideoutAmbushBossFightCinematicController.cs` —— 其 `HideoutCinematicState` 在 `:37-45`；同页 [HideoutCinematicAgentInfo](../HideoutCinematicAgentInfo/) 讲的是同文件里的另一个嵌套类型
- 相机与视图对象：[Camera](../../engine/Camera/)、`MissionScreen.CombatCamera` / `.CustomCamera`、`Camera.CreateCamera()`（`:95`）
- 数学类型：[MatrixFrame](../../core-extra/MatrixFrame/)（`_cameraFrame` 的类型，`Vector` 与 `rotation` 三轴）、[Vec3](../../core-extra/Vec3/)（`_cameraOffset` 的类型）
- 屏幕淡入淡出：[ScreenFadeController](../../mission-ext/ScreenFadeController/)（`BeginFadeOut`/`BeginFadeIn`，`:179`、`:183`）
- 同场景：[HideoutVisualOrderProvider](../HideoutVisualOrderProvider/)（藏身处战场的单位排序）、[DefeatHideoutBossObjective](../DefeatHideoutBossObjective/)
- 同桶：[PlayerAlleyData](../PlayerAlleyData/)、[OppositionData](../OppositionData/)、[GauntletStoryModeMapCheatsView](../GauntletStoryModeMapCheatsView/)、[MapAudioManager](../MapAudioManager/)、[ArenaPreloadView](../ArenaPreloadView/)、[ModuleCheckResult](../ModuleCheckResult/)、[NameplateSize](../NameplateSize/)
- 桶首页：[gameplay API 分区](../)