---
<!-- generated-by: tools/_v146_stubs.mjs -->
title: "mission bucket index"
description: "mission: canonical bucket with 5 public types. **A deliberate entry-class carve-out**: the five high-traffic mod entries `Mission`, `MissionState`, `MissionBehavior`, `Agent` and `Formation`; the full mission API is in [`../mission-ext/`](../mission-ext/). This is intended layout, not a duplicate-routing bug."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# mission bucket index

**Bucket:** `mission`
**Types:** 5
**Routing rule:** `entryPointDirs.Agent`

## Bucket Tour

**A deliberate entry-class carve-out**: the five high-traffic mod entries `Mission`, `MissionState`, `MissionBehavior`, `Agent` and `Formation`; the full mission API is in [`../mission-ext/`](../mission-ext/). This is intended layout, not a duplicate-routing bug.

> Every page route carries a trailing slash: same-bucket types are `./<Type>`, cross-bucket is `../../<bucket>/<Type>`, the parent index is `../`.

- - [↑ API reference](..//) · - [↑ version home](../..//) | - [full mission API](../mission-ext/)

> 4 further types are owned by the deep-writing workers and their pages have not landed yet, so they are listed by name only: Agent, Formation, Mission, MissionBehavior.

## Complete Class Catalog

### M

- [MissionState](./MissionState) — `TaleWorlds.MountAndBlade` · class · exposed 16

## See Also

- - [↑ API reference](..//)
- - [↑ version home](../..//)
-  [full mission API](../mission-ext/)
