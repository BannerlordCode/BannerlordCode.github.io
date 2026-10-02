# 证据包 · cycle-AF — engine 命名空间手写接管（10 页）

日期：2026-08-22
自动化：automation-1785652108735（大局观 / ulw-loop）
工作目录：`C:\WorkSpace\Bannerlord\BannerlordCode.github.io`

## 1. 基线复验（实跑，不轻信旧记忆）

```text
node tools/r1-coverage-report.mjs
  totalInventoryBusiness=5483
  noiseExcludedExtra=687
  r1Target=4796
  coveredDeep=290        (本轮 +10 → 300，见 §4)
  coveredFamily=4506
  covered=4796
  gap=0
  coverageRate=100.00%
  sTier=62/62

node tools/_tmp_classify_engine.mjs   (AF 前)
  TOTAL=205 deep_pass=2 stub=201 noise=1 other=1

node tools/_tmp_classify_engine.mjs   (AF 后)
  TOTAL=205 deep_pass=12 stub=191 noise=1 other=1
```

R1 结构口径仍 `gap=0 / 100% / sTier 62/62`。engine 是 R2 真实内容债重灾区（AF 前 201 独立 stub），本轮清零 10 页。

## 2. 本波重写清单（原地替换，保留 URL，未新建/删除）

Agent A（基础引擎对象）：
- `NativeObject`  — 源 `bannerlord-1.3.15/TaleWorlds.DotNet/NativeObject.cs`（命名空间 TaleWorlds.DotNet）
- `GameEntity`    — 源 `bannerlord-1.3.15/TaleWorlds.Engine/GameEntity.cs`
- `WorldPosition` — 源 `bannerlord-1.3.15/TaleWorlds.Engine/WorldPosition.cs`
- `Camera`        — 源 `bannerlord-1.3.15/TaleWorlds.Engine/Camera.cs`
- `Scene`         — 源 `bannerlord-1.3.15/TaleWorlds.Engine/Scene.cs`

Agent B（桥接/生命周期/子系统）：
- `EngineApplicationInterface` — 源 `bannerlord-1.3.15/TaleWorlds.Engine/EngineApplicationInterface.cs`
- `ScriptComponent`           — 源 `bannerlord-1.3.15/TaleWorlds.Engine/ScriptComponent.cs`
- `ScriptComponentBehavior`   — 源 `bannerlord-1.3.15/TaleWorlds.Engine/ScriptComponentBehavior.cs`
- `MBDebug`                   — 源 `bannerlord-1.3.15/TaleWorlds.Engine/MBDebug.cs`
- `SoundManager`              — 源 `bannerlord-1.3.15/TaleWorlds.Engine/SoundManager.cs`

1.4.5 bin 交叉核对：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/*.cs`（NativeObject 在 `bin/TaleWorlds.DotNet/`）。各页 `## 跨版本提示` 注明公开面 1.3.15↔1.4.5 一致。

## 3. 独立 QA（不采信子代理自报）

### 3.1 deep_pass 门禁（逐页 `node tools/_check_deep.mjs`，全部由主编独立复跑）

| 页面 | 状态 | 依赖链接数 |
|------|------|-----------|
| NativeObject | deep_pass | 11 |
| GameEntity | deep_pass | 16 |
| WorldPosition | deep_pass | 10 |
| Camera | deep_pass | 11 |
| Scene | deep_pass | 13 |
| EngineApplicationInterface | deep_pass | 12 |
| ScriptComponent | deep_pass | 10 |
| ScriptComponentBehavior | deep_pass | 10 |
| MBDebug | deep_pass | 8 |
| SoundManager | deep_pass | 9 |

10/10 全 `deep_pass`，无 `no-type-metadata` / `missing-mental-model` / `weak-deps` / `no-real-example` 等拒收项。

### 3.2 禁止样板句 grep（10 页全 CLEAN）

```text
grep -lE "SomeValue|null; // 替换|service = \.\.\.|从实际子系统 API|Get\.\.\.Implementation|阅读时先通过属性了解状态" \
  content/v1.3.15/zh/api/engine/{NativeObject,GameEntity,WorldPosition,Camera,Scene,EngineApplicationInterface,ScriptComponent,ScriptComponentBehavior,MBDebug,SoundManager}.md
→ 命中 0（BANNED: none）
```

### 3.3 断链审计（api 树，覆盖本轮新增全部链接）

```text
AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.3.15/zh/api node tools/audit-links.mjs
  FILES=5633
  TOTAL_LINKS=22779
  BROKEN_LINKS=0
  RESOLVE_NEITHER=0
  FILES_WITH_BROKEN=0
```

本轮新增链接全部解析（含 `../X/`、`../../campaign/*/`、`../../../architecture/*/` 三种深度），**未引入任何断链**。

### 3.4 抽页精读（验证非签名灌版 / 非虚构 API）

- `GameEntity.md`：真实方法 `GameEntity.Instantiate(scene,"town_banner",true)`、`SetLocalPosition(Vec3)`、`AddTag`、`GetChildren()`、`SetVisibilityExcludeParents(false)`、`Remove(int)`；心智模型明确「勿 `new GameEntity()`、用工厂」；风险段覆盖悬空引用 / `GlobalFrame` vs `LocalFrame` / `isTeleportation`；依赖链接指向 Scene/NativeObject/Material/Mesh/MetaMesh/Skeleton/ParticleSystem/Camera/ScriptComponent。
- `MBDebug.md`：真实方法 `ShowMessageBox`/`Print`/`Assert`/`MessageBoxTypeFlag`；正确区分「始终生效」vs `[Conditional]` 调试构建专属；风险段强调「断言在发布版被剔除，不可作运行时校验」；依赖指向 EngineApplicationInterface/SoundManager/crash-boundaries/native-interop。
- 两页均含 `**类型：**` 精确行、真实 csharp 示例（≥3 行且含 `.Method(` 调用）、`## 概述`>60 字、`## 心智模型`>80 字、`## 依赖关系` 精确标题。

## 4. 覆盖率增量

- engine `deep_pass`：2 → 12（+10）
- 全局 `coveredDeep`：290 → 300（+10，来自 r1-coverage-report 的 coveredDeep 口径）
- engine `stub`：201 → 191（-10）
- R1 `gap`：仍 0（结构口径）

## 5. 已知限制 / 待裁决

- engine 仍余 191 独立 stub（多为 `I*` 平台桥、渲染/物理叶类型，按 driver §10.9 多数属桥接/子系统索引，可后续按功能簇判定 noise vs 真业务）。
- 4 项战略决策仍挂起：唯一真待裁决 = 是否做 **R2**（深写/重定向 ~5,243 独立 stub）。本轮属 R2 推进，与「稳定命名空间节奏」一致，未擅动 campaign-ext/mission-ext 巨型桶。
- 未跑 `zola build`（§8-F）：36k 页全量渲染受本机 I/O 极慢约束，与历史一致；断链与手写门禁均已在文件层通过。

## 6. 下一入口

继续 engine 剩余 191 stub 中「真业务」子集（优先 `Material`/`Mesh`/`MetaMesh`/`Skeleton`/`ParticleSystem`/`Resource`/`Utilities`/`Scene` 相关簇），或按决策 #2 既定节奏转 `core-extra`(510)/`gui`(50)/`localization`(40)/`viewmodel`(40)/`mission`(53)/`campaign`(38)/`system`(25)。每波以 `_check_deep` + 断链 + 禁止句独立取证，禁止再信「X/X 0 stub」记忆。
